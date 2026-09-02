"use client";

import React, { useState } from 'react';
import styles from './ConsultationForm.module.css';
import { translations } from './translations';
import { useFormValidation } from './useFormValidation';
import { submitConsultation } from './submitHandler';

const ConsultationForm = () => {
    const [lang, setLang] = useState<'en' | 'te'>('en');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const t = translations[lang];

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        validateAll,
        resetForm
    } = useFormValidation({
        fullName: '',
        mobileNumber: '',
        age: '',
        mainConcern: '',
        preferredContactTime: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (validateAll()) {
            setIsSubmitting(true);
            try {
                await submitConsultation(values);
                setIsSuccess(true);
            } catch (error) {
                console.error("Submission failed", error);
                setSubmitError("Something went wrong. Please try again or contact us directly.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleReset = () => {
        resetForm();
        setIsSuccess(false);
        setSubmitError(null);
    };

    const toggleLanguage = () => {
        setLang(lang === 'en' ? 'te' : 'en');
    };

    if (isSuccess) {
        return (
            <div className={styles.consultationCard}>
                <div className={styles.successState}>
                    <div className={styles.successIcon}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h2 className={styles.successHeading}>{t.successHeading}</h2>
                    <p className={styles.successMessage}>{t.successMessage1}</p>
                    <p className={styles.successMessage}>{t.successMessage2}</p>
                    <button className={styles.secondaryButton} onClick={handleReset}>
                        {t.submitAnotherRequest}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.consultationCard}>
            <div className={styles.languageToggle}>
                <button
                    className={`${styles.langBtn} ${lang === 'en' ? styles.active : ''}`}
                    onClick={() => setLang('en')}
                    type="button"
                >
                    English
                </button>
                <span className={styles.langDivider}>|</span>
                <button
                    className={`${styles.langBtn} ${lang === 'te' ? styles.active : ''}`}
                    onClick={() => setLang('te')}
                    type="button"
                >
                    తెలుగు
                </button>
            </div>

            <div className={styles.formHeader}>
                <h2>{t.heading}</h2>
                <p>{t.supportingText}</p>
            </div>

            <form onSubmit={handleSubmit} className={styles.consultationForm} noValidate>
                <div className={styles.formGroup}>
                    <label htmlFor="fullName">{t.fullNameLabel} <span className={styles.required}>*</span></label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.fullNamePlaceholder}
                        className={errors.fullName && touched.fullName ? styles.errorInput : ''}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && touched.fullName && (
                        <span className={styles.errorMessage} id="fullName-error">
                            {t.validation[errors.fullName as keyof typeof t.validation]}
                        </span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="mobileNumber">{t.mobileNumberLabel} <span className={styles.required}>*</span></label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={values.mobileNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.mobileNumberPlaceholder}
                        className={errors.mobileNumber && touched.mobileNumber ? styles.errorInput : ''}
                        disabled={isSubmitting}
                        maxLength={10}
                        aria-invalid={!!errors.mobileNumber}
                        aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                    />
                    {errors.mobileNumber && touched.mobileNumber && (
                        <span className={styles.errorMessage} id="mobileNumber-error">
                            {t.validation[errors.mobileNumber as keyof typeof t.validation]}
                        </span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="age">{t.ageLabel} <span className={styles.required}>*</span></label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.agePlaceholder}
                        min="1"
                        max="120"
                        className={errors.age && touched.age ? styles.errorInput : ''}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.age}
                        aria-describedby={errors.age ? "age-error" : undefined}
                    />
                    {errors.age && touched.age && (
                        <span className={styles.errorMessage} id="age-error">
                            {t.validation[errors.age as keyof typeof t.validation]}
                        </span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="mainConcern">{t.mainConcernLabel} <span className={styles.required}>*</span></label>
                    <div className={styles.selectWrapper}>
                        <select
                            id="mainConcern"
                            name="mainConcern"
                            value={values.mainConcern}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.mainConcern && touched.mainConcern ? styles.errorInput : ''}
                            disabled={isSubmitting}
                            aria-invalid={!!errors.mainConcern}
                            aria-describedby={errors.mainConcern ? "mainConcern-error" : undefined}
                        >
                            <option value="" disabled>{t.selectOption}</option>
                            {Object.entries(t.mainConcernOptions).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                    </div>
                    {errors.mainConcern && touched.mainConcern && (
                        <span className={styles.errorMessage} id="mainConcern-error">
                            {t.validation[errors.mainConcern as keyof typeof t.validation]}
                        </span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="preferredContactTime">{t.preferredContactTimeLabel} <span className={styles.required}>*</span></label>
                    <div className={styles.selectWrapper}>
                        <select
                            id="preferredContactTime"
                            name="preferredContactTime"
                            value={values.preferredContactTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.preferredContactTime && touched.preferredContactTime ? styles.errorInput : ''}
                            disabled={isSubmitting}
                            aria-invalid={!!errors.preferredContactTime}
                            aria-describedby={errors.preferredContactTime ? "preferredContactTime-error" : undefined}
                        >
                            <option value="" disabled>{t.selectOption}</option>
                            {Object.entries(t.preferredContactTimeOptions).map(([key, value]) => (
                                <option key={key} value={key}>{value}</option>
                            ))}
                        </select>
                    </div>
                    {errors.preferredContactTime && touched.preferredContactTime && (
                        <span className={styles.errorMessage} id="preferredContactTime-error">
                            {t.validation[errors.preferredContactTime as keyof typeof t.validation]}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    className={`${styles.primaryButton} ${isSubmitting ? styles.loading : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className={styles.spinner}></span>
                            {t.loadingText}
                        </>
                    ) : (
                        t.submitButton
                    )}
                </button>

                {submitError && (
                    <div className={styles.submitErrorMessage} style={{ color: 'var(--error-color)', textAlign: 'center', marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>
                        {submitError}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ConsultationForm;
