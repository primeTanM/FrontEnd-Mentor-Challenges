const toggleButton = document.getElementsByClassName('togglebtn')[0]

const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})