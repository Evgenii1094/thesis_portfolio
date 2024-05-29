const ticker = () => {
    if (window.innerWidth <= 767) {
        return;
    }

    const reviewWrapper = document.getElementById('reviewWrapper');
    const reviewItems = reviewWrapper.getElementsByClassName('review__item');

    const itemsString = Array.from(reviewItems).map(item => item.outerHTML).join('');

    reviewWrapper.innerHTML += itemsString;

    const animationDuration = reviewItems.length * 6;

    reviewWrapper.style.animation = `scrollAnimation ${animationDuration}s linear infinite`;

    let isAnimationPaused = false;

    reviewWrapper.addEventListener('mouseover', () => {
        if (!isAnimationPaused) {
            reviewWrapper.style.animationPlayState = 'paused';
        }
    });

    reviewWrapper.addEventListener('mouseout', () => {
        if (!isAnimationPaused) {
            reviewWrapper.style.animationPlayState = 'running';
        }
    });

    reviewWrapper.addEventListener('click', () => {
        if (isAnimationPaused) {
            reviewWrapper.style.animationPlayState = 'running';
        } else {
            reviewWrapper.style.animationPlayState = 'paused';
        }

        isAnimationPaused = !isAnimationPaused;
    });
}

export default ticker;
