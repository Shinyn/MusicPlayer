export type ItunesResult = {
  artistId?: number;
  artistName: string;
  artistViewUrl?: string;
  artworkUrl30?: string;
  artworkUrl60?: string;
  artworkUrl100?: string;
  collectionCensoredName?: string;
  collectionExplicitness?: string;
  collectionId: number;
  collectionName: string;
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

export type ItunesResponse = {
  resultCount: number;
  results: ItunesResult[];
};
