import { useState, useEffect } from 'react';
// import emailjs from '@emailjs/browser';
// import { Store } from 'react-notifications-component';
// import { useModal } from './modal';

export const useValidation = () => {

    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');


    const [dirtyUserName, setDirtyUserName] = useState(false);
    const [dirtyPhone, setDirtyPhone] = useState(false);


    const [errorUserName, setErrorUserName] = useState('Заповніть це поле');
    const [errorPhone, setErrorPhone] = useState('Заповніть це поле');


    const [validForm, setvalidForm] = useState(false);

    // const { closeModal } = useModal();

    // const formRef = useRef();

    useEffect(() => {
        if (errorUserName || errorPhone) {
            setvalidForm(false);
        } else {
            setvalidForm(true);
        }
    }, [errorUserName, errorPhone,]);

    const formSubmit = evt => {
        evt.preventDefault();
        const data = {
            name: userName,
            tel: phone,
        };
        console.log('data:', data);
        reset();
        closeModal();
    };

    const reset = () => {
        setUserName('');
        setPhone('');
        setDirtyUserName(false);
        setDirtyPhone(false);
        setErrorUserName('Заповніть це поле');
        setErrorPhone('Заповніть це поле');
    };

    const validateName = value => {
        if (value.length < 2) {
            setErrorUserName('Ім’я має бути довшим');
            if (value.length === 0) {
                setErrorUserName('Заповніть це поле');
            }
        } else {
            setErrorUserName('');
        }
    };


    function validatePhone(phone) {
        let re = /^\+\d{12}$/;

        if (!re.test(phone)) {
            setErrorPhone('+380123456789');
        } else {
            setErrorPhone('');
        }
    }

    const handleChange = evt => {
        const { name, value } = evt.target;

        switch (name) {
            case 'name':
                if (evt.target.value.length > 30) return;
                validateName(value);
                setUserName(value);
                break;

            case 'phone':
                if (evt.target.value.length > 13) return;
                validatePhone(value);
                setPhone(value);
                break;

            default:
                return;
        }
    };

    const handleBlur = evt => {
        switch (evt.target.name) {
            case 'name':
                setDirtyUserName(true);
                break;

            case 'phone':
                setDirtyPhone(true);
                break;

            default:
                return;
        }
    };
    return {
        userName, phone,
        dirtyUserName, dirtyPhone,
        errorUserName, errorPhone,
        validForm, formSubmit, handleChange, handleBlur
    };
}