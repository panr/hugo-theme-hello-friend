/**
 * Responsive Dark Mode theme.
 *
 * Capable of following OS preference.
 *
 */

// Theme Toggle element
const themeToggle = document.querySelector(".theme-toggle");

// User preference toggle event listener
// Code block is unchanged since be313316fd08989ccd6a1ac17ce69a62196cd58
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    window.localStorage &&
        window.localStorage.setItem(
            "theme",
            document.body.classList.contains("dark-theme") ? "dark" : "light",
        );
});

// Handle theme switch for the initial function
function doToggle(color) {
    switch (color) {
        case "dark":
            document.body.classList.toggle("dark-theme");
            break;
        case "light":
            document.body.classList.remove("dark-theme");
            break;
    }
}

// Detect the color scheme the operating system prefers
function detectOSColorTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else {
        return "light";
    }
}

// Set the initial theme based on the order of preference
// Order:
// 1. User preferred theme setting picked with themeToggle (if present).
// 2. OS preferred setting.
(() => {
    const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
    const osTheme = detectOSColorTheme();
    const currentTheme = chosenTheme || osTheme
    localStorage.setItem("theme", currentTheme);
    doToggle(currentTheme);
})();