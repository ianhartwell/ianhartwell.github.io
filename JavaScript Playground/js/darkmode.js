// Darkmode logic using localStorage to maintain user choice even after page refresh

let darkmode = localStorage.getItem('darkmode');
const darkModeToggle = document.getElementById('dark-mode-toggle');

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.removeItem('darkmode')
}

// Enables darkmode to persist after refresh
if (darkmode === 'active') {
    enableDarkmode();
}

darkModeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== 'active' ? enableDarkmode() : disableDarkmode() // Checks darkmode status and changes accordingly upon click
})
