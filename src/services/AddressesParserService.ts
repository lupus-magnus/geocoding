import { CustomError } from "../config/errors";
export class AddressesParserService {
  static execute = (addresses: string): string[] => {
    if (!addresses) throw new CustomError("missing.addresses");

    const query = decodeURI(addresses);
    const addressesArray = query
      .split(";")
      .filter((item) => !!item)
      .map((item) => item.trim());

    if (addressesArray.length < 3) throw new CustomError("min.addresses");

    return addressesArray;
  };
}
