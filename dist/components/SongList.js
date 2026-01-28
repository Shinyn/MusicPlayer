import { convertToSecondsAndMinutes } from '../utils/converter.js';
import { fetchMusicData } from '../services/api.js';
import { audioControls } from '../utils/audio.js';
let currentResults = [];
const songsContainer = document.querySelector('.songs-container');
// Adds listener that uses bubbling to find closest CSS selector
songsContainer?.addEventListener('click', (e) => {
    const target = e.target;
    const songEl = target.closest('.song-container');
    if (!songEl)
        return;
    const id = songEl.dataset.id;
    if (!id)
        return;
    // Find current song
    const item = currentResults.find((song) => song.trackId?.toString() === id);
    if (!item)
        return;
    // ---------- UI ----------
    const musicCurrentSong = document.querySelector('.music-current-song');
    const nameAndTrack = document.createElement('div');
    nameAndTrack.className = 'name-and-track-container';
    const artistName = document.createElement('span');
    artistName.className = 'artist-name';
    artistName.textContent = item.artistName;
    const trackName = document.createElement('span');
    trackName.className = 'song-name';
    trackName.textContent = item.trackName;
    nameAndTrack.append(trackName, artistName);
    const artwork = document.createElement('img');
    artwork.className = 'song-artwork';
    if (item.artworkUrl100) {
        artwork.src = item.artworkUrl100;
        artwork.alt = `${item.trackName} cover by ${item.artistName}`;
    }
    musicCurrentSong.replaceChildren(artwork, nameAndTrack);
    // ---------- Active class ----------
    songsContainer?.querySelectorAll('.song-container.active').forEach((el) => el.classList.remove('active'));
    songEl.classList.add('active');
    // ---------- Audio ----------
    audioControls(item);
});
function drawUi(data) {
    if (data) {
        data.results.forEach((item) => {
            const songContainer = document.createElement('div');
            songContainer.classList = 'song-container';
            songContainer.dataset.id = item.trackId?.toString();
            const nameAndTrack = document.createElement('div');
            nameAndTrack.classList = 'name-and-track-container';
            const duration = document.createElement('div');
            duration.classList = 'song-duration';
            duration.textContent = `${convertToSecondsAndMinutes(item.trackTimeMillis)}`;
            const artistName = document.createElement('span');
            artistName.classList = 'artist-name';
            artistName.textContent = item.artistName;
            const trackName = document.createElement('span');
            trackName.classList = 'song-name';
            trackName.textContent = item.trackName;
            const artworkUrl100 = document.createElement('img');
            artworkUrl100.classList = 'song-artwork';
            if (item.artworkUrl100) {
                artworkUrl100.src = item.artworkUrl100;
                artworkUrl100.alt = `${item.trackName} cover by ${item.artistName}`;
            }
            nameAndTrack.append(trackName, artistName);
            songContainer?.append(artworkUrl100, nameAndTrack, duration);
            songsContainer?.append(songContainer);
        });
    }
}
// Fetches data based on provided search term
export const renderSongs = async (searchTerm) => {
    const data = await fetchMusicData(searchTerm);
    if (!data)
        return;
    currentResults = data.results;
    songsContainer?.replaceChildren();
    console.log(data);
    drawUi(data);
};
