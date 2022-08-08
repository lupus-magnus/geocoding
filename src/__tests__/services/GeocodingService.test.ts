import * as dotenv from "dotenv";
dotenv.config();
import { GeocodingService } from "@services/GeocodingService";

const addresses = ["Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003"];

describe("Geocoding Service Tests", () => {
  it("Should have an API_KEY variable for Google in .env file", async () => {
    const key = process.env.API_KEY;
    expect(typeof key).toBe("string");
  });

  it("Should be able to return the coordinates of a list of addresses", async () => {
    const [addressWithCoordinates] = await GeocodingService.execute(addresses);
    expect(addressWithCoordinates).toHaveProperty("lat");
    expect(addressWithCoordinates).toHaveProperty("long");
  });
});
