import { FormValues } from './useFormValidation';

// Add your Google Script URL here
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRYf7c85VyVT2s2Q3MZ5uzAeGR7N1GmyYffxttJqKN104Ru59ix3JYDitNP52zlmXq/exec";

export const submitConsultation = async (formData: FormValues) => {
    const submissionData = {
        fullName: formData.fullName.trim(),
        mobileNumber: formData.mobileNumber,
        age: parseInt(formData.age, 10),
        mainConcern: formData.mainConcern,
        preferredContactTime: formData.preferredContactTime
    };

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(submissionData)
        });

        console.log("Consultation submitted:", submissionData);

        return {
            success: true,
            data: submissionData
        };

    } catch (error) {
        console.error("Consultation submission error:", error);
        throw error;
    }
};
