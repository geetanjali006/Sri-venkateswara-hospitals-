import { useState } from 'react';

export interface FormValues {
    fullName: string;
    mobileNumber: string;
    age: string;
    mainConcern: string;
    preferredContactTime: string;
}

export const useFormValidation = (initialState: FormValues) => {
    const [values, setValues] = useState<FormValues>(initialState);
    const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string | null>>>({});
    const [touched, setTouched] = useState<Partial<Record<keyof FormValues, boolean>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        if (errors[name as keyof FormValues]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched({ ...touched, [name]: true });
        validateField(name as keyof FormValues, values[name as keyof FormValues]);
    };

    const validateField = (name: keyof FormValues, value: string) => {
        let error: string | null = null;

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
        const newErrors: Partial<Record<keyof FormValues, string | null>> = {};
        let isValid = true;

        (Object.keys(values) as Array<keyof FormValues>).forEach((key) => {
            const error = validateField(key, values[key]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);

        // Mark all as touched
        const allTouched = (Object.keys(values) as Array<keyof FormValues>).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {} as Partial<Record<keyof FormValues, boolean>>);
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
