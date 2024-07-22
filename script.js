// Function to handle scrolling for a specific container
function setupScroll(containerId, leftArrowId, rightArrowId) {
    let scrollWrapper = document.getElementById(containerId);
    let scrollLeft = document.getElementById(leftArrowId);
    let scrollRight = document.getElementById(rightArrowId);
    let scrollAmount = 0;
    let autoScroll;

    function scroll(direction) {
        let wrapperWidth = scrollWrapper.scrollWidth;
        let containerWidth = scrollWrapper.parentElement.offsetWidth;

        if (direction === 'right') {
            if (scrollAmount < wrapperWidth - containerWidth) {
                scrollAmount += 210;                            // Adjust as per your item width and margin
            } else {
                scrollAmount = 0;
            }
        } else if (direction === 'left') {
            if (scrollAmount > 0) {
                scrollAmount -= 210;                            // Adjust as per your item width and margin
            } else {
                scrollAmount = wrapperWidth - containerWidth;
            }
        }

        scrollWrapper.style.transform = `translateX(-${scrollAmount}px)`;
    }

    function startAutoScroll() {
        autoScroll = setInterval(() => scroll('right'), 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    scrollRight.addEventListener('click', () => {
        stopAutoScroll();
        scroll('right');
        startAutoScroll();
    });

    scrollLeft.addEventListener('click', () => {
        stopAutoScroll();
        scroll('left');
        startAutoScroll();
    });

    startAutoScroll();
}

// Setup scrolling for the container
setupScroll('scrollWrapper8', 'scrollLeft8', 'scrollRight8');
// setupScroll('scrollWrapper9', 'scrollLeft9', 'scrollRight9');
setupScroll('scrollWrapper1', 'scrollLeft1', 'scrollRight1');
// setupScroll('scrollWrapper2', 'scrollLeft2', 'scrollRight2');
setupScroll('scrollWrapper3', 'scrollLeft3', 'scrollRight3');
setupScroll('scrollWrapper5', 'scrollLeft5', 'scrollRight5');
setupScroll('scrollWrapper7', 'scrollLeft7', 'scrollRight7');









