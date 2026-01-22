import { renderSongs } from './components/SongList.js';

// Kopplar sökfältet till searchInput
const searchInput = document.querySelector('.song-search') as HTMLInputElement | null;
let searchTerm = '';

// Sätter värdet på searchTerm till värdet i sökfältet
searchInput?.addEventListener('input', () => {
  searchTerm = searchInput.value;
});

searchInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    renderSongs(searchTerm);
  }
});
