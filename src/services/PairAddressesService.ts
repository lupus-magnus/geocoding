import { AddressPairDTO, GeocodingServiceDTO } from "src/interfaces";

import { k_combinations } from "../utils/combinations";

export class PairAddressesService {
  static execute = (addresses: GeocodingServiceDTO[]): AddressPairDTO[] => {
    const pairs = k_combinations(addresses, 2) as AddressPairDTO[];
    return pairs;
  };
}
