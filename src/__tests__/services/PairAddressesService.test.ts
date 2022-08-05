import { PairAddressesService } from "@services/PairAddressesService";

import { k_combinations } from "../../utils/combinations";

const array1 = [1, 2, 3];
const array1Pairs = [
  [1, 2],
  [1, 3],
  [2, 3],
];

const sampleAddresses = [
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
  {
    formatted_address:
      "Estr. dos Três Rios, 200 - Freguesia de Jacarepaguá, Rio de Janeiro - RJ, 22745-005, Brazil",
    lat: -22.9393939,
    long: -43.3417918,
  },
];

describe("Addresses Pairing Tests", () => {
  it("should get all combinations of 2 in a given array", () => {
    const pairs = k_combinations(array1, 2);
    expect(pairs).toEqual(array1Pairs);
  });

  it("should return the addresses pairs in the correct format", () => {
    const pairs = PairAddressesService.execute(sampleAddresses);
    expect(pairs).toHaveLength(3);
    expect(pairs).toContainEqual([
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
    ]);
  });
});
