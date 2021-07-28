const toggleButton = document.getElementsByClassName('hamburger-button')

const navbarLinks = document.getElementsByClassName('navbar')

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})