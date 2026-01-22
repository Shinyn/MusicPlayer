// Ska spara spellistor och inställningar för ljud, volym, mute
export function setLocalStorageParameter(item: string): void {
  localStorage.setItem('myItem', `${item}`);
}

export function getLocalStorageParameter(): string | null {
  return localStorage.getItem('myItem');
}
