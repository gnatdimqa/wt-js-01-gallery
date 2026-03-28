const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modalImg.src = img.src;
        modal.classList.add('active');
    });
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
});