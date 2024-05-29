const dropdownInnerMenu = () => {
    const dropdownTitles = document.querySelectorAll('.header-nav__dropdown-title');

    dropdownTitles.forEach(title => {
        title.addEventListener('click', () => {
            const dropdownList = title.nextElementSibling;

            if (dropdownList && dropdownList.classList.contains('header-nav__dropdown-list')) {
                dropdownList.classList.toggle('is-open');
                title.classList.toggle('is-open');
            }

            closeOtherDropdowns(title);
        });
    });

    const closeOtherDropdowns = currentTitle => {
        dropdownTitles.forEach(title => {
            const dropdownList = title.nextElementSibling;
            if (title !== currentTitle && dropdownList && dropdownList.classList.contains('header-nav__dropdown-list')) {
                dropdownList.classList.remove('is-open');
                title.classList.remove('is-open');
            }
        });
    }

    document.addEventListener('click', e => {
        if (!e.target.closest('.header-nav__dropdown')) {
            closeAllDropdowns();
        }
    });

    const closeAllDropdowns = () => {
        const openDropdowns = document.querySelectorAll('.header-nav__dropdown-list.is-open');

        openDropdowns.forEach(dropdown => {
            dropdown.classList.remove('is-open');
        });
    }
}

export default dropdownInnerMenu;
