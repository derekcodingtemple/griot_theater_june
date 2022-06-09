const mobileMenu = document.querySelector( '#mobile-menu' )
const mobileMenuLinks = document.getElementById( 'mobile-menu-links' )

const handleMobileMenu = () => {
    mobileMenu.classList.toggle( 'change' )
    mobileMenuLinks.style.display === 'flex' ?
        mobileMenuLinks.style.display = 'none' :
        mobileMenuLinks.style.display = 'flex'
}