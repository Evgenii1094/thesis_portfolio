const fixedSidebar = () => {
    if (window.innerWidth <= 1279) {
        return;
    }

    const feedbackSidebar = document.querySelector('.feedback__sidebar'),
        feedbackWrapper = document.querySelector('.feedback__wrapper'),
        feedbackWrapperOffsetTop = feedbackWrapper.offsetTop,
        feedbackSidebarHeight = feedbackSidebar.offsetHeight;

    window.addEventListener("scroll", function () {
        let scrollPos = window.scrollY;

        if (scrollPos >= feedbackWrapperOffsetTop && scrollPos < feedbackWrapperOffsetTop + feedbackWrapper.offsetHeight) {
            var rect = feedbackWrapper.getBoundingClientRect();

            // Проверяем, если блок полностью виден внутри видимой области
            if (rect.top <= 0 && rect.bottom >= feedbackSidebarHeight) {
                feedbackSidebar.classList.add("is-fixed");
            } else {
                feedbackSidebar.classList.remove("is-fixed");
            }
        } else {
            feedbackSidebar.classList.remove("is-fixed");
        }
    });
}

export default fixedSidebar;
