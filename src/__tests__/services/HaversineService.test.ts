import { HaversineService } from "@services/HaversineService";
import { AddressPairDTO } from "src/interfaces";

const addressPairs: AddressPairDTO[] = [
  [
    {
      formatted_address:
        "R. Retiro dos Artistas, 1931 - Pechincha, Rio de Janeiro - RJ, 22770-104, Brazil",
      lat: -22.9387128,
      long: -43.356204,
    },
    {
      formatted_address:
        "R. Visc. de Santa Isabel, 161 - Vila Isabel, Rio de Janeiro - RJ, 20560-120, Brazil",
      lat: -22.9172644,
      long: -43.2559664,
    },
  ],
];

describe("Distance Measuring Tests (Haversine)", () => {
  it("Should be able to measure the distances with a 0.1 km precision", () => {
    const [measuredPairOfAddresses] = HaversineService.execute(addressPairs);
    expect(measuredPairOfAddresses.distance).toBeCloseTo(10.55, 1);
  });
});
