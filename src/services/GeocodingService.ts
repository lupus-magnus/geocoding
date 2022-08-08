import axios from "axios";
import { CustomError, errors } from "../../src/config/errors";
import { GeocodingResponseType, GeocodingServiceDTO } from "src/interfaces";

export class GeocodingService {
  static execute = async (
    addressesArray: string[]
  ): Promise<GeocodingServiceDTO[]> => {
    console.log("Executing the GeocodingService!");
    const key = process.env.API_KEY;
    const apiBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json";

    const addressesWithCoordinates = await Promise.all(
      addressesArray.map(async (address) => {
        const query = encodeURI(address);
        const endpoint = `${apiBaseUrl}?address=${query}&key=${key}`;
        try {
          const { data } = await axios.get<GeocodingResponseType>(endpoint);

          if (data.results.length > 1)
            throw new CustomError("specificity.error");
          if (data.results.length === 0) throw new CustomError("not.found");
          const [result] = data.results;
          const { formatted_address, geometry } = result;
          const { lat, lng: long } = geometry.location;
          return { formatted_address, lat, long };
        } catch (e) {
          if (!!e.code) {
            throw new CustomError(e.code);
          } else {
            throw new CustomError("axios.error");
          }
        }
      })
    );
    return addressesWithCoordinates;
  };
}
