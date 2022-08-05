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
  //   [
  //     {
  //       formatted_address:
  //         "R. Retiro dos Artistas, 1931 - Pechincha, Rio de Janeiro - RJ, 22770-104, Brazil",
  //       lat: -22.9387128,
  //       long: -43.356204,
  //     },
  //     {
  //       formatted_address:
  //         "Estr. dos Três Rios, 200 - Freguesia de Jacarepaguá, Rio de Janeiro - RJ, 22745-005, Brazil",
  //       lat: -22.9393939,
  //       long: -43.3417918,
  //     },
  //   ],
  //   [
  //     {
  //       formatted_address:
  //         "R. Visc. de Santa Isabel, 161 - Vila Isabel, Rio de Janeiro - RJ, 20560-120, Brazil",
  //       lat: -22.9172644,
  //       long: -43.2559664,
  //     },
  //     {
  //       formatted_address:
  //         "Estr. dos Três Rios, 200 - Freguesia de Jacarepaguá, Rio de Janeiro - RJ, 22745-005, Brazil",
  //       lat: -22.9393939,
  //       long: -43.3417918,
  //     },
  //   ],
];

describe("Distance Measuring Tests (Haversine)", () => {
  it("should return something", () => {
    HaversineService.execute(addressPairs);
  });
});
