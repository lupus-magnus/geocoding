import haversine from "haversine";

import { AddressPairDTO, MeasuredAddressPairsDTO } from "../interfaces";

export class HaversineService {
  static execute = (
    addressPairs: AddressPairDTO[]
  ): MeasuredAddressPairsDTO => {
    const pairsWithDistance = addressPairs.map((pair) => {
      const [address1, address2] = pair;
      const startingPoint = {
        latitude: address1.lat,
        longitude: address1.long,
      };
      const endingPoint = {
        latitude: address2.lat,
        longitude: address2.long,
      };
      const distance = Number(
        (haversine(startingPoint, endingPoint) as unknown as number).toFixed(2)
      );
      return { address1, address2, distance };
    });
    console.log(JSON.stringify(pairsWithDistance));
    return pairsWithDistance;
  };
}
