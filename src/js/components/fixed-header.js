const fixedHeader = () => {
    const header = document.querySelector('.header'),
          headerHeight = header.offsetHeight,
          siteWrapper = document.querySelector('.site-wrapper');

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight) {
            header.classList.add('is-fixed');
            siteWrapper.classList.add('is-fixed');
        } else {
            header.classList.remove('is-fixed');
            siteWrapper.classList.remove('is-fixed');
        }
    });
}

export default fixedHeader;
