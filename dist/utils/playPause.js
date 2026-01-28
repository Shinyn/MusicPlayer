export function changeIconPlayPause() {
    const playPauseBtn = document.querySelector('#play-pause-button');
    const pauseSvg = document.querySelector('#pause-svg');
    playPauseBtn?.addEventListener('click', () => {
        playPauseBtn.classList.toggle('visually-hidden');
    });
}
