import { CustomError } from "../config/errors";
export class AddressesParserService {
  static execute = (addresses: string): string[] => {
    const addressesArray = addresses.split(";");

    if (addressesArray.length < 3) throw new CustomError("min.addresses");

    console.log({ IN: addresses, OUT: addressesArray });
    return addressesArray;
  };
}
