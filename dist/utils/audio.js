const audio = new Audio();
audio.classList = 'song-audio';
let currentTrackId;
export function audioControls(item) {
    const volume = document.querySelector('#volume-control');
    const playPause = document.querySelector('#play-pause');
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
        }
        else {
            audio.play();
            isPlaying = true;
        }
    });
    volume.oninput = () => {
        audio.volume = Number(volume.value) / 100;
    };
}
