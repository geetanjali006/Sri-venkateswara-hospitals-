import { useState } from 'react';

export const useFormValidation = (initialState) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        // For mobile number, only allow digits
        if (name === 'mobileNumber') {
            const numericValue = value.replace(/\D/g, '');
            if (numericValue.length <= 10) {
                setValues({ ...values, [name]: numericValue });
            }
            return;
        }

        setValues({ ...values, [name]: value });

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
        validateField(name, values[name]);
    };

    const validateField = (name, value) => {
        let error = null;

        switch (name) {
            case 'fullName':
                if (!value || value.trim() === '') {
                    error = 'fullName';
                }
                break;
            case 'mobileNumber':
                if (!value || !/^\d{10}$/.test(value)) {
                    error = 'mobileNumber';
                }
                break;
            case 'age':
                const ageNum = parseInt(value, 10);
                if (!value || isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
                    error = 'age';
                }
                break;
            case 'mainConcern':
                if (!value) {
                    error = 'mainConcern';
                }
                break;
            case 'preferredContactTime':
                if (!value) {
                    error = 'preferredContactTime';
                }
                break;
            default:
                break;
        }

        return error;
    };

    const validateAll = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(values).forEach((key) => {
            const error = validateField(key, values[key]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);

        // Mark all as touched
        const allTouched = Object.keys(values).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});
        setTouched(allTouched);

        return isValid;
    };

    const resetForm = () => {
        setValues(initialState);
        setErrors({});
        setTouched({});
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateAll,
        resetForm
    };
};
