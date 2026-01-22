import { setLocalStorageParameter, getLocalStorageParameter } from './storage.js';

const addPlaylistButton = document.querySelector('#create-playlist-button');

export function addPlaylist() {
  addPlaylistButton?.addEventListener('click', () => {
    // Ska öppna modal
    // "Skapa spellista"
    const modal = document.createElement('div') as HTMLDivElement;
    const playlistName = document.createElement('span') as HTMLSpanElement;
    const textInputField = document.createElement('input') as HTMLInputElement;
    textInputField.classList.add('modal-text-input');

    // ---v
    console.log('you clicked me');
    setLocalStorageParameter('test');
  });
}
