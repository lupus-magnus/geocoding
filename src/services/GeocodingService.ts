import axios from "axios";
import { CustomError } from "src/config/errors";
import { GeocodingResponseType, GeocodingServiceDTO } from "src/interfaces";

export class GeocodingService {
  static execute = async (address: string): Promise<GeocodingServiceDTO> => {
    const key = process.env.API_KEY;
    const query = encodeURI(address);
    const apiBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json";
    const endpoint = `${apiBaseUrl}?address=${query}&key=${key}`;
    try {
      const { data } = await axios.get<GeocodingResponseType>(endpoint);
      if (data.results.length > 1) throw new CustomError("specificity.error");
      if (data.results.length === 0) throw new CustomError("not.found");
      const [result] = data.results;
      const { formatted_address, geometry } = result;
      const { lat, lng: long } = geometry.location;
      return { formatted_address, lat, long };
    } catch {
      throw new CustomError("axios.error");
    }
  };
}
