// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


// const Map = () => {

//     // load script for google map
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//         libraries: ["places"],
//     });

//     // for showing few markers
//     const markers = [
//         { lat: 49.819637, lng: 30.142945 },
//         { lat: 49.369629, lng: 29.683630 },
//     ];

//     // LatLngBounds: It is an instance which represents a geographical rectangle from the points at its south - west and north - east corners.
//     //extend method: It extends the map bounds to contain the given point.
//     //fitBounds method: It accepts the bounds as a parameter and sets the map viewport to contain the given bounds.
//     const onLoad = (map) => {
//         const bounds = new google.maps.LatLngBounds();
//         markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
//         map.fitBounds(bounds);
//     };


//     return <>
//         {(isLoaded) && <GoogleMap
//             zoom={13}
//             mapContainerClassName="map"
//             mapContainerStyle={{ width: "100%", height: "100%" }}
//             onLoad={onLoad}
//         >
//             {markers.map(({ lat, lng }, index) => (
//                 <Marker key={index} position={{ lat, lng }}
//                     icon={"/Andezyan_logo_mini.svg"}
//                 />
//             ))}
//         </GoogleMap>
//         }</>
// };


// export default Map;








/* global google */
import { GoogleMap, InfoWindow, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";


const Map = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    // state for Marker
    const [isOpen, setIsOpen] = useState(false);
    // state for InfoWindowData
    const [infoWindowData, setInfoWindowData] = useState();

    const markers = [
        { address: "Фізична aдреса: 09100, Київська обл., Білоцерківський р-н, м. Біла Церква, вул. Київська, 96.", lat: 49.819637, lng: 30.142945 },
        { address: "Юридична адреса: 09800, Київська обл., Білоцерківський р-н, м. Тетіїв, вул. Соборна, 68, к.18", lat: 49.369629, lng: 29.683630 },
    ];

    // LatLngBounds: It is an instance which represents a geographical rectangle from the points at its south - west and north - east corners.
    //extend method: It extends the map bounds to contain the given point.
    //fitBounds method: It accepts the bounds as a parameter and sets the map viewport to contain the given bounds.
    const onMapLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
        map.fitBounds(bounds);
    };

    const handleMarkerClick = (id, address) => {
        setInfoWindowData({ id, address });
        setIsOpen(true);
    };

    return (
        <>
            {!isLoaded ? (
                <h1>Loading...</h1>
            ) : (
                <GoogleMap
                    mapContainerClassName="map"
                    mapContainerStyle={{ width: "100%", height: "100%", color: "black", textAlign: "center" }}
                    onLoad={onMapLoad}
                    onClick={() => setIsOpen(false)}
                >
                    {markers.map(({ address, lat, lng }, ind) => (
                        <Marker
                            key={ind}
                            position={{ lat, lng }}
                            icon={"/Andezyan_logo_mini.svg"}
                            onClick={() => {
                                handleMarkerClick(ind, address);
                            }}
                        >
                            {isOpen && infoWindowData?.id === ind && (
                                <InfoWindow
                                    onCloseClick={() => {
                                        setIsOpen(false);
                                    }}
                                >
                                    <h3 style={{ width: "180px" }}>{infoWindowData.address}</h3>
                                </InfoWindow>
                            )}
                        </Marker>
                    ))}
                </GoogleMap>
            )}
        </>
    );
};

export default Map;