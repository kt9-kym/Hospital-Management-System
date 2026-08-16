// Translation Dictionary for English and Amharic
const translations = {
    en: {
        title: "Hospital Management System",
        subtitle: "Patient Portal Login or explore the dashboard as a guest",
        emailLabel: "Email",
        emailPlaceholder: "Enter your email",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter your password",
        googleBtn: "Continue with Google",
        loginBtn: "Login",
        guestBtn: "Continue without Login",
        forgotPassword: "Forgot Password?",
        noAccount: "Don't have an account?",
        signUp: "Sign Up",
        continueGuest: "Continue as Guest",
        switchButtonText: "አማርኛ"
    },
    am: {
        title: "የሆስፒታል አስተዳደር ስርዓት",
        subtitle: "የታካሚ ፖርታል መግቢያ ወይም እንደ እንግዳ ዳሽቦርዱን ያስሱ",
        emailLabel: "ኢሜይል",
        emailPlaceholder: "ኢሜይልዎን ያስገቡ",
        passwordLabel: "የይለፍ ቃል",
        passwordPlaceholder: "የይለፍ ቃልዎን ያስገቡ",
        googleBtn: "በጎግል ይቀጥሉ",
        loginBtn: "ግባ",
        guestBtn: "ሳይገቡ ይቀጥሉ",
        forgotPassword: "የይለፍ ቃል ረስተዋል?",
        noAccount: "አካውንት የለዎትም?",
        signUp: "ይመዝገቡ",
        continueGuest: "እንደ እንግዳ ይቀጥሉ",
        switchButtonText: "English"
    }
};

let currentLang = localStorage.getItem('preferredLanguage') || 'en';

function applyLanguage(lang) {
    // Update all elements with data-key across the page
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update input placeholders with data-key-placeholder
    document.querySelectorAll('[data-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update button text if the switch button exists on the current page
    const langSwitchBtn = document.getElementById('langSwitchBtn');
    if (langSwitchBtn) {
        langSwitchBtn.textContent = translations[lang].switchButtonText;
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'am' : 'en';
    localStorage.setItem('preferredLanguage', currentLang);
    applyLanguage(currentLang);
}

// Automatically apply saved language preference as soon as the page loads
window.addEventListener('DOMContentLoaded', () => {
    applyLanguage(currentLang);
});