export const fetchMusicData = async (searchTerm) => {
    const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`);
    if (!response.ok) {
        throw new Error('Failed to fetch iTunes data');
    }
    return response.json();
};
