import { CustomError } from "../config/errors";
export class AddressesParserService {
  static execute = (addresses: string): string[] => {
    if (!addresses) throw new CustomError("missing.header");

    const addressesArray = addresses.split(";");
    if (addressesArray.length < 3) throw new CustomError("min.addresses");

    return addressesArray;
  };
}
