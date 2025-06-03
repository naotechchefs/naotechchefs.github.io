//DO NOT DELETE CATS ^..^ 
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('imageGallery');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    // ^..^
    if(!gallery || !prevBtn || !nextBtn) {
        console.error("Elementi mancanti nel DOM!");
        return;
    }
    //^..^
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    
    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * 50}%)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === galleryItems.length - 5;
    }
    //^..^
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) updateGallery(--currentIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < galleryItems.length - 1) updateGallery(++currentIndex);
    });
    //^..^
updateGallery();
});

window.addEventListener('load', () => {
    const sliderTrack = document.querySelector('.slider-track');
    
    const trackClone = sliderTrack.innerHTML;
    sliderTrack.innerHTML += trackClone;
});