
const dropdownMenu = () => {
    const dropdown = document.querySelector('.dropdown-menu'),
        dropdownBtn = document.querySelector('.js-dropdown-menu'),
        closeMenu = document.querySelector('.header__hamburger');

    const openDropdown = (e) => {
        if (e.target.classList.contains('is-service')) {
            e.preventDefault();
            dropdown.classList.add('is-opened');
        }
    };

    const closeDropdown = () => {
        dropdown.classList.remove('is-opened');
    };

    dropdownBtn.addEventListener('click', openDropdown);

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('is-back')) {
            closeDropdown();
        }
    });

    closeMenu.addEventListener('click', closeDropdown);

    const checkScreenSize = () => {
        if (window.innerWidth < 1280) {
            dropdownBtn.addEventListener('click', openDropdown);
        } else {
            dropdownBtn.removeEventListener('click', openDropdown);
            closeDropdown();
        }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}

export default dropdownMenu;
