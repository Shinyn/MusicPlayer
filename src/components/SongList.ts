import { convertToSecondsAndMinutes } from '../utils/converter.js';
import type { ItunesResult } from '../models/Song.js';
import { fetchMusicData } from '../services/api.js';
import { controls } from '../utils/audio.js';

const songsContainer = document.querySelector('.songs-container');

export const renderSongs = async (searchTerm: string) => {
  const data = await fetchMusicData(searchTerm);
  songsContainer?.replaceChildren();
  if (data) {
    data.results.forEach((item: ItunesResult) => {
      const songContainer = document.createElement('div') as HTMLDivElement;
      songContainer.classList = 'song-container';
      songContainer.addEventListener('click', (e) => {
        const musicCurrentSong = document.querySelector('.music-current-song') as HTMLElement;
        const nameAndTrack = document.createElement('div') as HTMLDivElement;
        nameAndTrack.classList = 'name-and-track-container';

        const artistName = document.createElement('span') as HTMLSpanElement;
        artistName.classList = 'artist-name';
        artistName.textContent = item.artistName;

        const trackName = document.createElement('span') as HTMLSpanElement;
        trackName.classList = 'song-name';
        trackName.textContent = item.trackName;

        nameAndTrack.append(trackName, artistName);

        const artworkUrl100 = document.createElement('img') as HTMLImageElement;
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
        const song = (e.target as HTMLElement).closest('.song-container');
        if (!song) return;

        songsContainer?.querySelectorAll('.song-container.active').forEach((el) => {
          el.classList.remove('active');
        });

        song.classList.add('active');
        controls(item);
      });

      const nameAndTrack = document.createElement('div') as HTMLDivElement;
      nameAndTrack.classList = 'name-and-track-container';

      const duration = document.createElement('div') as HTMLDivElement;
      duration.classList = 'song-duration';
      duration.textContent = `${convertToSecondsAndMinutes(item.trackTimeMillis)}`;

      const artistName = document.createElement('span') as HTMLSpanElement;
      artistName.classList = 'artist-name';
      artistName.textContent = item.artistName;

      const trackName = document.createElement('span') as HTMLSpanElement;
      trackName.classList = 'song-name';
      trackName.textContent = item.trackName;

      const artworkUrl100 = document.createElement('img') as HTMLImageElement;
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
