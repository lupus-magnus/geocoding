import request, { Request, Response } from "supertest";

import { app } from "../../server";

const twoAddressesQuery = encodeURI(
  "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200"
);

const underspecificQuery = encodeURI(
  "bairro campo grande; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200; Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003"
);

const notToBeFoundQuery = encodeURI("FAKEFAKEFAKEFAKEFAKE; 000; fake");

const validQuery = encodeURI(
  "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200; Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030"
);

describe("Route GET /distances Tests", () => {
  it("Should return 400 if the request does not come with the addresses query param", async () => {
    const { body, statusCode } = (await request(app).get(
      "/distances"
    )) as Response;

    expect(statusCode).toBe(400);
    expect(body.code).toBe("missing.addresses");
  });

  it("Should return 400 if there are less than 3 addresses in the request", async () => {
    const { body, statusCode } = await request(app)
      .get("/distances")
      .query({ addresses: twoAddressesQuery });

    expect(statusCode).toBe(400);
    expect(body.code).toBe("min.addresses");
  });

  it("Should return 400 if there are any addresses that are not specific enough", async () => {
    const { body, statusCode } = await request(app)
      .get("/distances")
      .query({ addresses: underspecificQuery });

    expect(statusCode).toBe(400);
    expect(body.code).toBe("specificity.error");
  });

  it("Should return 404 if there are no results for a given query", async () => {
    const { body, statusCode } = await request(app)
      .get("/distances")
      .query({ addresses: notToBeFoundQuery });

    expect(statusCode).toBe(404);
    expect(body.code).toBe("not.found");
  });

  it("Should return 200 with a valid payload if the query is correctly formatted", async () => {
    const { body, statusCode } = await request(app)
      .get("/distances")
      .query({ addresses: validQuery });

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty("distances");
    expect(body).toHaveProperty("nearest");
    expect(body).toHaveProperty("farthest");
  });
});
