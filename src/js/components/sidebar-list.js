const sidebarList = () => {
    const navDropdown = document.querySelector('.side-list__dropdown'),
          dropdownButton = document.querySelector('.side-list__dropdown-btn'),
          navItems = document.querySelectorAll('.side-list__nav .side-list__item'),
          contentWrapper = document.querySelector('.side-list__content'),
          contentItems = document.querySelectorAll('.side-list__content .side-list__inner');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function updateActiveNavItem() {
        let found = false;

        contentItems.forEach((contentItem, index) => {
            if (!found && isInViewport(contentItem)) {
                navItems.forEach(navItem => navItem.classList.remove('is-active'));
                navItems[index].classList.add('is-active');
                found = true;
            }
        });
    }

    function scrollToContent(index) {
        const targetElement = contentItems[index];

        contentWrapper.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }

    function toggleDropdown() {
        navDropdown.classList.toggle('is-open');
    }

    dropdownButton.addEventListener('click', toggleDropdown);

    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', function () {
            const selectedTitle = navItem.textContent;
            dropdownButton.innerHTML = `${selectedTitle} <span class="side-list__dropdown-icon" aria-hidden="true"></span>`;
            scrollToContent(index);

            toggleDropdown();

            navItems.forEach(item => item.classList.remove('is-active'));
            navItem.classList.add('is-active');
        });
    });

    contentWrapper.addEventListener('scroll', updateActiveNavItem);

    updateActiveNavItem();
}

export default sidebarList;
