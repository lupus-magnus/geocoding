import { Request, Response } from "express";

import { AddressesParserService } from "@services/index";

import { errors } from "src/config/errors";

export class DistancesController {
  static get = (req: Request, res: Response) => {
    const { addresses } = req.headers;
    try {
      const addressesArray = AddressesParserService.execute(
        addresses as string
      );
      return res.status(200).json({ addressesArray });
    } catch (error) {
      if (error.code) {
        return res.status(errors[error.code].httpStatus).json(error);
      }
      return res.status(errors.default.httpStatus).json(errors.default);
    }
  };
}
