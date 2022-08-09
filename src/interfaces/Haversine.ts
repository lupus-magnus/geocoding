export type AddressWithCoordinatesDTO = {
  label: string;
  coordinates: {
    lat: number;
    lon: number;
  };
};

export type MeasuredAddressPairsDTO = {
  addresses: [AddressWithCoordinatesDTO, AddressWithCoordinatesDTO];
  distance: number;
}[];
