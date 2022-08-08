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
  status?: string;
};

export type GeocodingServiceDTO = {
  formatted_address: string;
  lat: number;
  long: number;
};
