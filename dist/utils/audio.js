const audio = new Audio();
audio.classList = 'song-audio';
let currentTrackId;
export function audioControls(item) {
    const volume = document.querySelector('#volume-control');
    const playPause = document.querySelector('#play-pause-button');
    const playSvg = document.querySelector('#play-svg');
    const pauseSvg = document.querySelector('#pause-svg');
    let isPlaying = false;
    // audio.addEventListener('ended', () => {
    //   spela nästa i låt listan
    // });
    playPause?.addEventListener('click', () => {
        if (currentTrackId !== item.trackId) {
            audio.src = `${item.previewUrl}`;
            currentTrackId = item.trackId;
        }
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playSvg?.classList.remove('visually-hidden');
            pauseSvg?.classList.add('visually-hidden');
        }
        else {
            audio.play();
            isPlaying = true;
            pauseSvg?.classList.remove('visually-hidden');
            playSvg?.classList.add('visually-hidden');
        }
    });
    volume.oninput = () => {
        audio.volume = Number(volume.value) / 100;
    };
}
