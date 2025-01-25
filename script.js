// creating ability to toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const themeStylesheet = document.getElementById('theme-stylesheet');

// Get the user's saved theme from localStorage
let isNewTheme = localStorage.getItem('theme') === 'newstyle';

// Apply the saved theme on page load
if (isNewTheme) {
  themeStylesheet.href = 'newstyle.css'; // load new theme
  themeToggleBtn.textContent = 'Switch Back'; // update button
} else {
  themeStylesheet.href = 'classic.css'; // load old theme
  themeToggleBtn.textContent = 'Switch Theme'; // update button
}

// add event listener
themeToggleBtn.addEventListener('click', () => {
  if (isNewTheme) {
    themeStylesheet.href = 'classic.css'; // switch to classic
    themeToggleBtn.textContent = 'Switch Theme'; // update button
    localStorage.setItem('theme', 'classic'); // save choice
  } else {
    themeStylesheet.href = 'newstyle.css'; // switch to new theme
    themeToggleBtn.textContent = 'Switch Back'; // update button
    localStorage.setItem('theme', 'newstyle'); // save theme
  }
  isNewTheme = !isNewTheme; //update theme
});
