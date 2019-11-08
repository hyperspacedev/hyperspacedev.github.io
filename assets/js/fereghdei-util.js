function toggleMobileMenu() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("navbar-links")) {
        menu.setAttribute("class", "navbar-mobile-links");
    } else {
        menu.setAttribute("class", "navbar-links");
    }
}