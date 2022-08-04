import { Request, Response } from "express";

import { AddressesParserService } from "@services/index";

class DistancesController {
  static get = (req: Request, res: Response) => {
    const { addresses } = req.headers;
    if (!addresses) {
      throw new Error("Sem address fica dificil");
    }
  };
}
