import { useState, useRef } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow, Autocomplete } from "@react-google-maps/api";
import { createArrOfNeededObjProperties } from "@/utils/createArrOfNeededObjProperties";
import { contactsData } from "@/data/contacts.data";


const Map = () => {
    // save place, selected in search input
    const [selectedPlace, setSelectedPlace] = useState(null);
    // save {lat, lng} of place, selected in search input
    const [searchLngLat, setSearchLngLat] = useState(null);
    // save data, when user clicked on the map
    const [currentLocation, setCurrentLocation] = useState(null);
    // for Autocomplete Component
    const autocompleteRef = useRef(null);
    // state of Marker's InfoWindowData
    const [isOpen, setIsOpen] = useState(false);
    // state for InfoWindowData
    const [infoWindowData, setInfoWindowData] = useState();
    // starts settings
    const [mapCenter, setMapCenter] = useState({ lat: 49.819637, lng: 30.142945 })

    // laod script for google map
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading....</div>;

    // properties from contactsData
    const neededProperties = ["physicalAddress", "registrationAddress"];
    // for showing few markers
    const markers = createArrOfNeededObjProperties(contactsData, neededProperties);

    // handle place change on search
    const handlePlaceChanged = () => {
        // get data about entered in search input place 
        const place = autocompleteRef.current.getPlace();
        // save data in state
        setSelectedPlace(place);
        // save data in state
        setSearchLngLat({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
        });
        // reset data of current location
        setCurrentLocation(null);
    };


    // get current location
    const handleGetLocationClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // get lat and lng
                    const { latitude, longitude } = position.coords;
                    // reset
                    setSelectedPlace(null);
                    // reset
                    setSearchLngLat(null);
                    // save to state
                    setCurrentLocation({ lat: latitude, lng: longitude });
                },
                (error) => {
                    console.log(error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };


    const handleMarkerClick = (id, address, lat, lng, googleLink) => {
        // save data for InfoWindowData
        setInfoWindowData({ id, address, googleLink });
        setIsOpen(true);
        setCurrentLocation(null);
        setSearchLngLat(null);
        setMapCenter({ lat, lng });
    };


    // work on every map loading 
    const onMapLoad = (map) => {
        // for getLocation button's settings
        // wrapper for button
        const controlDiv = document.createElement("div");
        // button styles
        const controlUI = document.createElement("div");
        controlUI.innerHTML = "Моя геолокация";
        controlUI.style.backgroundColor = "#febb12";
        controlUI.style.color = "#fff";
        // controlUI.style.border = "2px solid #000";
        // controlUI.style.borderRadius = "3px";
        // controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
        controlUI.style.cursor = "pointer";
        // controlUI.style.marginBottom = "22px";
        controlUI.style.textAlign = "center";
        controlUI.style.width = "100%";
        controlUI.style.fontSize = "16px";
        controlUI.style.padding = "8px";
        controlUI.addEventListener("click", handleGetLocationClick);
        controlDiv.appendChild(controlUI);

        // const centerControl = new window.google.maps.ControlPosition(
        //   window.google.maps.ControlPosition.TOP_CENTER,
        //   0,
        //   10
        // );

        // set button in the center of the map
        map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
            controlDiv
        );

        // for markers
        // LatLngBounds: It is an instance which represents a geographical rectangle from the points at its south - west and north - east corners.
        const bounds = new google.maps.LatLngBounds();
        //extend method: It extends the map bounds to contain the given point.
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        //fitBounds method: It accepts the bounds as a parameter and sets the map viewport to contain the given bounds.
        map.fitBounds(bounds);
    };


    return (
        <>
            {/* search component  */}
            <Autocomplete
                onLoad={(autocomplete) => {
                    // console.log("Autocomplete loaded:", autocomplete);
                    autocompleteRef.current = autocomplete;
                }}
                onPlaceChanged={handlePlaceChanged}
                options={{ fields: ["address_components", "geometry", "name"] }}
            >
                <input type="text" placeholder="Search for a location" />
            </Autocomplete>

            {/* map component  */}
            <GoogleMap
                zoom={currentLocation || selectedPlace || mapCenter ? 18 : 12}
                center={currentLocation || searchLngLat || mapCenter}
                mapContainerClassName="map"
                mapContainerStyle={{ width: "100%", height: "100%", color: "black" }}
                onLoad={onMapLoad}
            >
                {selectedPlace && <Marker position={searchLngLat} />}
                {currentLocation && <Marker position={currentLocation} />}

                {markers.map(({ address, lat, lng, googleLink }, ind) => (
                    <Marker
                        key={ind}
                        position={{ lat, lng }}
                        icon={"/logo_bg_black_small.svg"}
                        onClick={() => {
                            handleMarkerClick(ind, address, lat, lng, googleLink);
                        }}
                    >
                        {isOpen && infoWindowData?.id === ind && (
                            <InfoWindow
                                onCloseClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <h3 style={{ width: "180px" }}>
                                    <a href={infoWindowData.googleLink} target="_blank" rel="noopener noreferrer nofollow">{infoWindowData.address}</a>
                                </h3>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </>
    );
};


export default Map;