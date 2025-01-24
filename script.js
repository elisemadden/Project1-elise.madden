// Select the theme toggle button and stylesheet link
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Get the user's saved theme from localStorage
let isGoofyTheme = localStorage.getItem('theme') === 'newstyle';

// Apply the saved theme on page load
if (isGoofyTheme) {
  themeStylesheet.href = 'newstyle.css'; // Load goofy theme
  themeToggleBtn.textContent = 'Switch Back'; // Update button text
} else {
  themeStylesheet.href = 'classic.css'; // Load classic theme
  themeToggleBtn.textContent = 'Switch Theme'; // Update button text
}

// Add event listener to toggle the theme
themeToggleBtn.addEventListener('click', () => {
  if (isGoofyTheme) {
    themeStylesheet.href = 'classic.css'; // Switch to classic theme
    themeToggleBtn.textContent = 'Switch Theme'; // Update button text
    localStorage.setItem('theme', 'classic'); // Save theme choice
  } else {
    themeStylesheet.href = 'newstyle.css'; // Switch to goofy theme
    themeToggleBtn.textContent = 'Switch Back'; // Update button text
    localStorage.setItem('theme', 'newstyle'); // Save theme choice
  }
  isGoofyTheme = !isGoofyTheme; // Update theme state
});
