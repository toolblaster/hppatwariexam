/**
 * Global Scripts
 * Centralized logic for UI interactions, utility functions, and future state management.
 * * Features:
 * 1. Back to Top Button (Auto-injects and manages visibility)
 * 2. Mobile Menu Toggle Listener (Delegate)
 * 3. Future Roadmap: Dark Mode & Font Size preferences
 */

document.addEventListener('DOMContentLoaded', () => {
    initGlobalFeatures();
});

function initGlobalFeatures() {
    setupBackToTop();
    // Future: setupDarkMode();
}

/**
 * 1. Back to Top Button
 * Automatically injects a button that appears when scrolling down.
 */
function setupBackToTop() {
    // 1. Create the button element
    const btn = document.createElement('button');
    btn.id = 'back-to-top';
    btn.ariaLabel = 'Scroll to top';
    btn.className = 'fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg cursor-pointer opacity-0 invisible transition-all duration-300 z-50 hover:bg-blue-700 hover:scale-110 active:scale-95 flex items-center justify-center w-10 h-10 md:w-12 md:h-12';
    btn.innerHTML = '<i class="fa-solid fa-arrow-up text-sm md:text-base"></i>';
    
    document.body.appendChild(btn);

    // 2. Add scroll listener
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.remove('opacity-0', 'invisible');
            btn.classList.add('opacity-100', 'visible');
        } else {
            btn.classList.add('opacity-0', 'invisible');
            btn.classList.remove('opacity-100', 'visible');
        }
    });

    // 3. Add click listener
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Helper: Simple storage wrapper for future use (e.g. Dark Mode)
 */
const AppStorage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { console.warn('LocalStorage error:', e); }
    },
    get: (key) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (e) { return null; }
    }
};
