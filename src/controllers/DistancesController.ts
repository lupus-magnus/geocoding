import { Request, Response } from "express";

import {
  AddressesParserService,
  GeocodingService,
  HaversineService,
  PairAddressesService,
  FindExtremesService,
} from "@services/index";

import { errors } from "../config/errors";

export class DistancesController {
  static get = async (req: Request, res: Response) => {
    const { addresses } = req.query as { addresses: string };

    try {
      const addressesArray = AddressesParserService.execute(addresses);
      const addressesWithCoordinates = await GeocodingService.execute(
        addressesArray
      );
      const addressPairs = PairAddressesService.execute(
        addressesWithCoordinates
      );
      const addressPairsWithDistances = HaversineService.execute(addressPairs);
      const response = FindExtremesService.execute(addressPairsWithDistances);
      return res.status(200).json(response);
    } catch (error) {
      if (error.code) {
        return res.status(errors[error.code].httpStatus).json(error);
      }
      return res.status(errors.default.httpStatus).json(errors.default);
    }
  };
}
