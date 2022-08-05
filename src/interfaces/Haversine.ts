import { GeocodingServiceDTO } from "./Geolocation";

export type MeasuredAddressPairsDTO = {
  address1: GeocodingServiceDTO;
  address2: GeocodingServiceDTO;
  distance: number;
}[];
