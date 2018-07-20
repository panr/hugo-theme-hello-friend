// Toggle theme

const getTheme = localStorage.getItem('theme')
const themeToggle = document.querySelector('.theme-toggle')
const isDark = getTheme === 'dark'

document.body.classList.toggle('dark-theme', isDark)

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light')
})