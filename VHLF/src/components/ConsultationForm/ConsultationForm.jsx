import React, { useState } from 'react';
import './ConsultationForm.css';
import { translations } from './translations';
import { useFormValidation } from './useFormValidation';
import { submitConsultation } from './submitHandler';

const ConsultationForm = () => {
    const [lang, setLang] = useState('en');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState(null);

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

    const handleSubmit = async (e) => {
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
            <div className="consultation-card">
                <div className="success-state">
                    <div className="success-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h2 className="success-heading">{t.successHeading}</h2>
                    <p className="success-message">{t.successMessage1}</p>
                    <p className="success-message">{t.successMessage2}</p>
                    <button className="secondary-button" onClick={handleReset}>
                        {t.submitAnotherRequest}
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="consultation-card">
            <div className="language-toggle">
                <button
                    className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                    onClick={() => setLang('en')}
                    type="button"
                >
                    English
                </button>
                <span className="lang-divider">|</span>
                <button
                    className={`lang-btn ${lang === 'te' ? 'active' : ''}`}
                    onClick={() => setLang('te')}
                    type="button"
                >
                    తెలుగు
                </button>
            </div>

            <div className="form-header">
                <h2>{t.heading}</h2>
                <p>{t.supportingText}</p>
            </div>

            <form onSubmit={handleSubmit} className="consultation-form" noValidate>
                <div className="form-group">
                    <label htmlFor="fullName">{t.fullNameLabel} <span className="required">*</span></label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.fullNamePlaceholder}
                        className={errors.fullName && touched.fullName ? 'error-input' : ''}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    />
                    {errors.fullName && touched.fullName && (
                        <span className="error-message" id="fullName-error">{t.validation[errors.fullName]}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="mobileNumber">{t.mobileNumberLabel} <span className="required">*</span></label>
                    <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={values.mobileNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={t.mobileNumberPlaceholder}
                        className={errors.mobileNumber && touched.mobileNumber ? 'error-input' : ''}
                        disabled={isSubmitting}
                        maxLength={10}
                        aria-invalid={!!errors.mobileNumber}
                        aria-describedby={errors.mobileNumber ? "mobileNumber-error" : undefined}
                    />
                    {errors.mobileNumber && touched.mobileNumber && (
                        <span className="error-message" id="mobileNumber-error">{t.validation[errors.mobileNumber]}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="age">{t.ageLabel} <span className="required">*</span></label>
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
                        className={errors.age && touched.age ? 'error-input' : ''}
                        disabled={isSubmitting}
                        aria-invalid={!!errors.age}
                        aria-describedby={errors.age ? "age-error" : undefined}
                    />
                    {errors.age && touched.age && (
                        <span className="error-message" id="age-error">{t.validation[errors.age]}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="mainConcern">{t.mainConcernLabel} <span className="required">*</span></label>
                    <div className="select-wrapper">
                        <select
                            id="mainConcern"
                            name="mainConcern"
                            value={values.mainConcern}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.mainConcern && touched.mainConcern ? 'error-input' : ''}
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
                        <span className="error-message" id="mainConcern-error">{t.validation[errors.mainConcern]}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="preferredContactTime">{t.preferredContactTimeLabel} <span className="required">*</span></label>
                    <div className="select-wrapper">
                        <select
                            id="preferredContactTime"
                            name="preferredContactTime"
                            value={values.preferredContactTime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.preferredContactTime && touched.preferredContactTime ? 'error-input' : ''}
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
                        <span className="error-message" id="preferredContactTime-error">{t.validation[errors.preferredContactTime]}</span>
                    )}
                </div>

                <button
                    type="submit"
                    className={`primary-button ${isSubmitting ? 'loading' : ''}`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <span className="spinner"></span>
                            {t.loadingText}
                        </>
                    ) : (
                        t.submitButton
                    )}
                </button>

                {submitError && (
                    <div className="submit-error-message" style={{ color: 'var(--error-color)', textAlign: 'center', marginTop: '12px', fontSize: '14px', fontWeight: '500' }}>
                        {submitError}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ConsultationForm;
