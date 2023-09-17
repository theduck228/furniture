const pageItems = document.querySelectorAll('.blog-content__blog-page');
const prevArrow = document.querySelector('.arrow-prev');
const nextArrow = document.querySelector('.arrow-next');
let currentPage = 1;

function showCurrentPage() {
    pageItems.forEach(item => item.classList.remove('active'));
    pageItems[currentPage - 1].classList.add('active');

    if (currentPage === 1) {
        prevArrow.classList.add('inactive');
    } else {
        prevArrow.classList.remove('inactive');
    }

    if (currentPage === 2) {
        nextArrow.classList.add('inactive');
    } else {
        nextArrow.classList.remove('inactive');
    }
}

function handlePageClick(pageNumber) {
    currentPage = pageNumber;
    showCurrentPage();
}

prevArrow.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showCurrentPage();
    }
});

nextArrow.addEventListener('click', () => {
    if (currentPage < 2) {
        currentPage++;
        showCurrentPage();
    }
});

showCurrentPage();