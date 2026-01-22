// Ska spara spellistor och inställningar för ljud, volym, mute
export function setLocalStorageParameter(item) {
    localStorage.setItem('myItem', `${item}`);
}
export function getLocalStorageParameter() {
    return localStorage.getItem('myItem');
}
