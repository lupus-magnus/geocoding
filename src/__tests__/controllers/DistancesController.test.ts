import request, { Request, Response } from "supertest";

import { app } from "../../server";

describe("Route GET /distances Tests", () => {
  it("Should return 400 if the request does not come with a header addresses", async () => {
    const { body, statusCode } = (await request(app).get(
      "/distances"
    )) as Response;

    expect(statusCode).toBe(400);
    expect(body.code).toBe("missing.header");
  });

  it("Should return 400 if there are less than 3 addresses in the request", async () => {
    const mockAddressHeader =
      "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200";
    const { body, statusCode } = await request(app)
      .get("/distances")
      .set("addresses", mockAddressHeader);

    expect(statusCode).toBe(400);
    expect(body.code).toBe("min.addresses");
  });

  it("Should return 400 if there are any addresses that are not specific enough", async () => {
    const mockAddressHeader =
      "bairro campo grande; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200; Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003";
    const { body, statusCode } = await request(app)
      .get("/distances")
      .set("addresses", mockAddressHeader);

    expect(statusCode).toBe(400);
    expect(body.code).toBe("specificity.error");
  });

  it("Should return 404 if there are no results for a given query", async () => {
    const mockAddressHeader = "FAKEFAKEFAKEFAKEFAKE; 000; fake";
    const { body, statusCode } = await request(app)
      .get("/distances")
      .set("addresses", mockAddressHeader);

    expect(statusCode).toBe(404);
    expect(body.code).toBe("not.found");
  });
});
