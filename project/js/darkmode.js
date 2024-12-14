function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Function to update the favicon based on dark mode preference
function updateFavicon() {
    const faviconLink = document.querySelector('link[rel="icon"]');
    if (isDarkMode()) {
        // Dark mode is enabled, update the favicon for dark mode
        faviconLink.href = 'assets/icons/dark-mode-favicon.png';
    } else {
        // Light mode is enabled, update the favicon for light mode
        faviconLink.href = 'assets/icons/light-mode-favicon.png';
    }
}

window.onload = function () {
    // Initially set the favicon based on dark mode preference
    updateFavicon();

    // Listen for changes in dark mode preference and update the favicon accordingly
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
};