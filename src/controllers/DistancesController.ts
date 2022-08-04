import { Request, Response } from "express";

class DistancesController {
  static get = (req: Request, res: Response) => {
    const { addresses } = req.headers;
    if (!addresses) {
      throw new Error("Sem address fica dificil");
    }
  };
}
