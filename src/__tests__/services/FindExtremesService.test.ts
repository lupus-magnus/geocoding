import { FindExtremesService } from "@services/FindExtremesService";
import { MeasuredAddressPairsDTO } from "src/interfaces";

const measuredAddresses: MeasuredAddressPairsDTO = [
  {
    address1:
      "R. Retiro dos Artistas, 1931 - Pechincha, Rio de Janeiro - RJ, 22770-104, Brazil",
    address2:
      "R. Visc. de Santa Isabel, 161 - Vila Isabel, Rio de Janeiro - RJ, 20560-120, Brazil",
    distance: 10.54,
  },
  {
    address1:
      "R. Retiro dos Artistas, 1931 - Pechincha, Rio de Janeiro - RJ, 22770-104, Brazil",
    address2:
      "Estr. dos Três Rios, 200 - Freguesia de Jacarepaguá, Rio de Janeiro - RJ, 22745-005, Brazil",
    distance: 1.48,
  },
  {
    address1:
      "R. Visc. de Santa Isabel, 161 - Vila Isabel, Rio de Janeiro - RJ, 20560-120, Brazil",
    address2:
      "Estr. dos Três Rios, 200 - Freguesia de Jacarepaguá, Rio de Janeiro - RJ, 22745-005, Brazil",
    distance: 9.13,
  },
];

describe("Find the closest and farthest neighbours", () => {
  const addressesWithExtremes = FindExtremesService.execute(measuredAddresses);
  it("should be able to find the farthest pair of addresses", () => {
    const { farthest } = addressesWithExtremes;
    expect(farthest.distance).toBeCloseTo(10.54, 2);
  });

  it("should be able to find the nearest pair of addresses", () => {
    const { nearest } = addressesWithExtremes;
    expect(nearest.distance).toBeCloseTo(1.48, 2);
  });
});
