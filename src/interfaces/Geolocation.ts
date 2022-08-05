export type GeocodingResponseResultsType = {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
};

export type GeocodingResponseType = {
  results: GeocodingResponseResultsType[];
};

export type GeocodingServiceDTO = {
  formatted_address: string;
  lat: number;
  long: number;
};
