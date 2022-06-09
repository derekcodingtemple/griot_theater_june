const mobileMenu = document.querySelector( '#mobile-menu' )
const mobileMenuIcon = document.querySelector( '#mobile-menu-icon' )
const mobileMenuLinks = document.getElementById( 'mobile-menu-links' )

const handleMobileMenu = () => {
    mobileMenu.classList.toggle( 'change' )

    mobileMenuLinks.style.display === 'flex' ?
        mobileMenuLinks.style.display = 'none' :
        mobileMenuLinks.style.display = 'flex'
}