interface Song {
  id: number;
  title: string;
  durationInSeconds: number;
  artist: string;
  album?: Album;
}

interface Album {
  title: string;
  albumCoverURL?: string;
}

type Status = 'playing' | 'paused';

let playList: Song[] = [
  {
    id: 1,
    title: 'Master of Puppets',
    durationInSeconds: 515,
    artist: 'Metallica',
    album: {
      title: 'Master of Puppets',
    },
  },
  {
    id: 2,
    title: 'King Nothing',
    durationInSeconds: 328,
    artist: 'Metallica',
    album: {
      title: 'Load',
      albumCoverURL: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Metallica_-_Load_cover.jpg',
    },
  },
  {
    id: 3,
    title: 'Enter Sandman',
    durationInSeconds: 332,
    artist: 'Metallica',
    album: {
      title: 'Metallica',
      albumCoverURL: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Metallica_-_Metallica_cover.jpg',
    },
  },
  {
    id: 4,
    title: 'Fade To Black',
    durationInSeconds: 418,
    artist: 'Metallica',
  },
];

// How to convert ms to seconds and minutes
// 1 millisecond = 0.001 seconds
const convertToSecondsAndMinutes = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds}`;
};

const songsContaier = document.querySelector('.songs-container');

// Funkar <-------------------------------v

// playList.forEach((song) => {
//   const card = document.createElement('div') as HTMLDivElement;
//   card.classList = 'song-container';

//   const id = document.createElement('div') as HTMLDivElement;
//   id.classList = 'song-id';
//   id.textContent = `${song.id}`;

//   const h3 = document.createElement('h3') as HTMLHeadingElement;
//   h3.classList = 'song-title';
//   h3.textContent = song.title;

//   const artist = document.createElement('span') as HTMLSpanElement;
//   artist.classList = 'song-artist';
//   artist.textContent = song.artist;

//   const duration = document.createElement('div') as HTMLDivElement;
//   duration.classList = 'song-duration';
//   duration.textContent = `${convertToSecondsAndMinutes(song.durationInSeconds)}`;

//   card.append(id, h3, artist, duration);
//   songsContaier?.append(card);
// });

type ItunesResult = {
  artistId?: number;
  artistName: string;
  artistViewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionExplicitness?: string;
  collectionHdPrice?: number;
  collectionPrice?: number;
  contentAdvisoryRating?: string;
  country?: string;
  currency?: string;
  kind?: string;
  longDescription?: string;
  previewUrl?: string;
  primaryGenreName?: string;
  releaseDate?: string;
  shortDescription?: string;
  trackCensoredName?: string;
  trackExplicitness?: string;
  trackHdPrice?: number;
  trackHdRentalPrice?: number;
  trackId?: number;
  trackName: string;
  trackPrice?: number;
  trackRentalPrice?: number;
  trackTimeMillis: number;
  trackViewUrl?: string;
  wrapperType?: string;
};

type ItunesResponse = {
  resultCount: number;
  results: ItunesResult[];
};

// let search = document.querySelector('.song-search');

const searchInput = document.querySelector('.song-search') as HTMLInputElement | null;
let searchTerm = '';

searchInput?.addEventListener('input', () => {
  searchTerm = searchInput.value;
});

const fetchMusicData = async () => {
  if (!searchTerm) return;
  const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&entity=song`);
  const data: ItunesResponse = await response.json();
  console.log(data);

  //   if (data) {}
  data.results.forEach((item) => {
    const artistName = document.createElement('span') as HTMLSpanElement;
    artistName.classList = 'artist-name';
    artistName.textContent = item.artistName;

    const trackName = document.createElement('span') as HTMLSpanElement;
    trackName.classList = 'song-name';
    trackName.textContent = item.trackName ? item.trackName : '--------';

    // How to add url to this img
    const artworkUrl100 = document.createElement('img') as HTMLImageElement;
    artworkUrl100.classList = 'song-artwork';
    artworkUrl100.src = item.artworkUrl100;
    artworkUrl100.alt = `${artistName} - ${trackName}`;

    songsContaier?.append(artistName, trackName, artworkUrl100);
  });

  //   console.log(data.results[0].artistName);
};

searchInput?.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    fetchMusicData();
  }
});

artistId: 909253;
artistName: 'Jack Johnson';
artistViewUrl: 'https://music.apple.com/us/artist/jack-johnson/909253?uo=4';
artworkUrl30: 'https://is1-ssl.mzstatic.com/image/thumb/Video3/v4/80/1d/47/801d4725-5070-1e2a-ab32-dbb240ee8390/UMG_vidcvr_00602547849786_01_RGB72_1400x2100_16UMGIM10177.jpg/30x30bb.jpg';
artworkUrl60: 'https://is1-ssl.mzstatic.com/image/thumb/Video3/v4/80/1d/47/801d4725-5070-1e2a-ab32-dbb240ee8390/UMG_vidcvr_00602547849786_01_RGB72_1400x2100_16UMGIM10177.jpg/60x60bb.jpg';
artworkUrl100: 'https://is1-ssl.mzstatic.com/image/thumb/Video3/v4/80/1d/47/801d4725-5070-1e2a-ab32-dbb240ee8390/UMG_vidcvr_00602547849786_01_RGB72_1400x2100_16UMGIM10177.jpg/100x100bb.jpg';
collectionExplicitness: 'notExplicit';
collectionHdPrice: 9.99;
collectionPrice: 7.99;
contentAdvisoryRating: 'Unrated';
country: 'USA';
currency: 'USD';
kind: 'feature-movie';
longDescription: 'This film takes an intimate look at Jack Johnson’s music and tour greening initiatives. When Jack goes on the road, he doesn’t just show up and play music. The tour partners with local non-profits, local food vendors and strives to leave a lasting positive impact. The entire tour is an extension of the environmentally conscious and socially engaged life he leads along with his wife, Kim. After years on the road, playing venues around the globe, the Johnson’s have established an inspiring way of touring with a focus on creating as little impact on the earth as possible. Along the way, the tour gives a platform to dozens of local non-profits working to educate and inspire others to make choices that benefit our communities and the greater global environment. While following Jack’s 2014 west coast tour, this film highlights the Johnson‘s Kokua Hawaii Foundation, the All At Once campaign, and several non-profit partners and businesses focusing on plastic free initiatives and sustainable local food systems. Additionally, the film highlights the unique way in which tour is run. From traveling on biodiesel-powered buses, to sourcing organic and locally grown meals to carefully disposing of waste created along the way. The goal of the tour and this documentary is to inspire people to get involved, make the right choices, and enjoy the music along the way.';
previewUrl: 'https://video-ssl.itunes.apple.com/itunes-assets/Video111/v4/a8/e5/19/a8e5199c-df7e-7ff1-6c87-0bc4db95a201/mzvf_2579342668513896153.640x476.h264lc.U.p.m4v';
primaryGenreName: 'Concert Films';
releaseDate: '2016-04-08T07:00:00Z';
shortDescription: 'This film takes an intimate look at Jack Johnson’s music and tour greening initiatives. When Jack';
trackCensoredName: 'All At Once: On the Road Tour Documentary';
trackExplicitness: 'notExplicit';
trackHdPrice: 9.99;
trackHdRentalPrice: 4.99;
trackId: 1487135503;
trackName: 'All At Once: On the Road Tour Documentary';
trackPrice: 7.99;
trackRentalPrice: 3.99;
trackTimeMillis: 2472388;
trackViewUrl: 'https://itunes.apple.com/us/movie/all-at-once-on-the-road-tour-documentary/id1487135503?uo=4';
wrapperType: 'track';
