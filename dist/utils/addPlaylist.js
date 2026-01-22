import { setLocalStorageParameter } from './storage.js';
const addPlaylistButton = document.querySelector('#create-playlist-button');
export function addPlaylist() {
    addPlaylistButton?.addEventListener('click', () => {
        // Ska öppna modal
        // "Skapa spellista"
        const modal = document.createElement('div');
        const playlistName = document.createElement('span');
        const textInputField = document.createElement('input');
        textInputField.classList.add('modal-text-input');
        // ---v
        console.log('you clicked me');
        setLocalStorageParameter('test');
    });
}
