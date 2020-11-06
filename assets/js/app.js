// let darkMode = localStorage.getItem('dark-mode');

function darkModeTheme () {
    const element = document.body;
    element.classList.toggle('dark-mode');

    const img = document.querySelector('#svg-image')
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        img.style.filter="invert(100%)";
    }
}

// window.addEventListener('load', darkModeTheme);

// console.log(darkModeTheme() + "cheguei");

/*function darkModeTheme () {
    const element = document.body;
    element.classList.toggle("dark-mode");
}*/

// // LocalStorage to persist the use of user preference

// // get value in the LocalStorage
// const nightModeStorage = localStorage.getItem('gmtNightMode')
// const nightMode = document.querySelector('.dark-mode')


// // if you have the value in localStorage
// if (nightModeStorage) {
//     // activate night mode
//     document.documentElement.classList.add('dark-mode')

//     // already let toglle marked
//     nightMode.checked = true;
// }

// if (document.documentElement.classList.contains('dark-mode')) {
//     // save the theme to localStorage
//     localStorage.setItem('gmtNightMode', true)
//     return
// }

// // else remove
// localStorage.removeItem('gmtNightMode') 