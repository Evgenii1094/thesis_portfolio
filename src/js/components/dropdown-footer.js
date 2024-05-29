const dropdownFooter = () => {
    const dropdownTitles = document.querySelectorAll('.js-dropdown-title');

    const handleDropdownClick = (title) => {
        const dropdownList = title.nextElementSibling;

        if (dropdownList && dropdownList.classList.contains('js-dropdown-list')) {
            dropdownList.classList.toggle('is-open');
            title.classList.toggle('is-open');
        }

        closeOtherDropdowns(title);
    };

    const closeOtherDropdowns = (currentTitle) => {
        dropdownTitles.forEach((title) => {
            const dropdownList = title.nextElementSibling;
            if (title !== currentTitle && dropdownList && dropdownList.classList.contains('js-dropdown-list')) {
                dropdownList.classList.remove('is-open');
                title.classList.remove('is-open');
            }
        });
    };

    const handleTitleClick = (event) => {
        const title = event.currentTarget;
        handleDropdownClick(title);
    };

    dropdownTitles.forEach((title) => {
        title.addEventListener('click', handleTitleClick);
    });

    const handleResize = () => {
        if (window.innerWidth <= 767) {
            dropdownTitles.forEach((title) => {
                title.addEventListener('click', handleTitleClick);
            });
        } else {
            dropdownTitles.forEach((title) => {
                title.removeEventListener('click', handleTitleClick);
            });
        }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
};

export default dropdownFooter;
