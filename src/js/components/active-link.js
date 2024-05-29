const activeLink = () => {
    const path = window.location.pathname;
    const page = path.split("/").pop();

    const links = document.querySelectorAll('.header-nav__link');

    links.forEach(link => {
        let href = link.getAttribute('href');
        if (page === href) {
            link.parentNode.classList.add('is-active');
        }
    });
}

export default activeLink;
