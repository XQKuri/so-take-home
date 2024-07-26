document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const sidebar = document.getElementById('sidebar');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.add('show');
    });

    closeIcon.addEventListener('click', () => {
        sidebar.classList.remove('show');
    });
    
   window.addEventListener('load', () => {
            const audio = document.getElementById('background-audio');
            // Try to play the audio
            audio.play().catch(error => {
                // Handle errors (e.g., autoplay blocked)
                console.error('Audio play error:', error);
            });
       
    const iconItems = document.querySelectorAll('.icon-item');

    iconItems.forEach(item => {
        let isSpinning = false;

        item.addEventListener('mouseover', () => {
            if (!isSpinning) {
                isSpinning = true;
                item.style.transform = 'rotateY(360deg)';
            }
        });

        item.addEventListener('transitionend', () => {
            isSpinning = false;
            item.style.transition = 'none';
            item.style.transform = 'rotateY(0deg)';
            setTimeout(() => {
                item.style.transition = 'transform 0.6s ease';
            }, 20);
        });
    });
    
});
