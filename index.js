const nav = document.querySelector('nav ul')
const toggleNav = document.querySelector('.close')
    .addEventListener('click', () => {
    nav.classList.toggle('active')
})