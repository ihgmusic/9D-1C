document.addEventListener('DOMContentLoaded', () => {
    const audioLinks = document.querySelectorAll('.audio-link');
    const playerContainers = document.querySelectorAll('.audio-player-container');

    audioLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const audioId = link.getAttribute('data-audio-id');
            
            playerContainers.forEach(container => {
                if (container.getAttribute('data-player-id') === audioId) {
                    container.classList.toggle('hidden');
                } else {
                    container.classList.add('hidden');
                }
            });
        });
    });
});