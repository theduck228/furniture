const btn = document.querySelector('.about-us__general-btn-scroller');
const container = document.querySelector('.about-us__general');
const wrapper = document.querySelector('.about-us__general-wrapper');
const maxVisibleHeight = 500; // Максимальная видимая высота (.about-us__general-wrapper)
let isExpanded = false;

function toggleContent() {
    container.style.transition = 'height 0.3s';
    const wrapperHeight = wrapper.scrollHeight;

    if (isExpanded) {
        container.style.height = `${maxVisibleHeight}px`;
        btn.style.transform = 'translate(300%, 0%) rotate(0deg)';
    } else {
        container.style.height = `${wrapperHeight}px`;
        btn.style.transform = 'translate(300%, 50%) rotate(180deg)';
    }

    isExpanded = !isExpanded;
}

btn.addEventListener('click', toggleContent);