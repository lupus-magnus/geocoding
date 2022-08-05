import { Request, Response } from "express";

import {
  AddressesParserService,
  GeocodingService,
  HaversineService,
  PairAddressesService,
} from "@services/index";

import { errors } from "src/config/errors";

export class DistancesController {
  static get = async (req: Request, res: Response) => {
    const { addresses } = req.headers;
    try {
      const addressesArray = AddressesParserService.execute(
        addresses as string
      );
      const addressesWithCoordinates = await Promise.all(
        addressesArray.map(
          async (address) => await GeocodingService.execute(address)
        )
      );
      const pairs = PairAddressesService.execute(addressesWithCoordinates);
      const distances = HaversineService.execute(pairs);
      return res.status(200).json({ distances });
    } catch (error) {
      if (error.code) {
        return res.status(errors[error.code].httpStatus).json(error);
      }
      return res.status(errors.default.httpStatus).json(errors.default);
    }
  };
}
