window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    // Activate Bootstrap scrollspy on the main nav element
    const sections = document.querySelectorAll(".page-section");
    const navLinks = document.querySelectorAll(".nav-item a");
    const mainNav = document.body.querySelector("#mainNav");

    window.onscroll = (el) => {
      sections.forEach((section) => {
        let top = window.scrollY;
        let navHeight = mainNav.offsetHeight;
        let offset = section.offsetTop - 20 - navHeight;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        console.log(navLinks);

        if (top >= offset && top < offset + height) {
          navLinks.forEach((links) => {
            links.classList.remove("active");
            document.querySelector(`nav a[href*="${id}"]`).classList.add("active");
          });
        }
      });
    };
});