import haversine from "haversine";

import {
  AddressPairDTO,
  AddressWithCoordinatesDTO,
  MeasuredAddressPairsDTO,
} from "../interfaces";

type AddressPairWithCoordinatesDTO = [
  AddressWithCoordinatesDTO,
  AddressWithCoordinatesDTO
];
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
      const addresses: AddressPairWithCoordinatesDTO = [
        {
          label: address1.formatted_address,
          coordinates: { lat: address1.lat, lon: address1.long },
        },
        {
          label: address2.formatted_address,
          coordinates: { lat: address2.lat, lon: address2.long },
        },
      ];

      return { addresses, distance };
    });

    return pairsWithDistance;
  };
}
