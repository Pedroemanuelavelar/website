//  Insert darkModeTheme
function darkModeTheme () {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

// LocalStorage to persist the use of user preference

// get value in the LocalStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')
const nightModeStorage = document.querySelector('.dark-mode')

// if you have the value in localStorage
if (nightModeStorage) {
    // activate night mode
    document.documentElement.classList.add('dark-mode')
}

if (document.documentElement.classList.contains('dark-mode')) {
    // save the theme to localStorage
    localStorage.setItem('gmtNightMode'. true)
    return
}

// else remoove
localStorage.removeItem('gmtNightMode')