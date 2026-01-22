import { convertToSecondsAndMinutes } from '../utils/converter.js';
import { fetchMusicData } from '../services/api.js';
import { controls } from '../utils/audio.js';
const songsContainer = document.querySelector('.songs-container');
export const renderSongs = async (searchTerm) => {
    const data = await fetchMusicData(searchTerm);
    songsContainer?.replaceChildren();
    if (data) {
        data.results.forEach((item) => {
            const songContainer = document.createElement('div');
            songContainer.classList = 'song-container';
            songContainer.addEventListener('click', (e) => {
                const musicCurrentSong = document.querySelector('.music-current-song');
                const nameAndTrack = document.createElement('div');
                nameAndTrack.classList = 'name-and-track-container';
                const artistName = document.createElement('span');
                artistName.classList = 'artist-name';
                artistName.textContent = item.artistName;
                const trackName = document.createElement('span');
                trackName.classList = 'song-name';
                trackName.textContent = item.trackName;
                nameAndTrack.append(trackName, artistName);
                const artworkUrl100 = document.createElement('img');
                artworkUrl100.classList = 'song-artwork';
                if (item.artworkUrl100) {
                    artworkUrl100.src = item.artworkUrl100;
                    artworkUrl100.alt = `${item.trackName} cover by ${item.artistName}`;
                }
                musicCurrentSong.replaceChildren();
                musicCurrentSong.append(artworkUrl100, nameAndTrack);
                // The closest() method of the Element interface traverses the element
                // and its parents (heading toward the document root) until it finds a
                // node that matches the specified CSS selector.
                const song = e.target.closest('.song-container');
                if (!song)
                    return;
                songsContainer?.querySelectorAll('.song-container.active').forEach((el) => {
                    el.classList.remove('active');
                });
                song.classList.add('active');
                controls(item);
            });
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
};
