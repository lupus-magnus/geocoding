import { AddressesParserService } from "../../services/AddressesParserService";

const correctAddressesInput =
  "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200; Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030";

const notEnoughAddressesInput =
  "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003; Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200";

describe("Addresses Parser Tests", () => {
  it("Should correctly split the input string into an array of addresses", () => {
    const expectedOutcome = [
      "Av. Rio Branco, 1 Centro, Rio de Janeiro RJ, 20090003",
      " Praça Mal. Âncora, 122 Centro, Rio de Janeiro RJ, 20021200",
      " Rua 19 de Fevereiro, 34 Botafogo, Rio de Janeiro RJ, 22280030",
    ];
    const array = AddressesParserService.execute(correctAddressesInput);
    expect(array).toEqual(expectedOutcome);
  });

  it("Should throw an error when receiving less than three addresses", () => {
    expect(() => {
      try {
        AddressesParserService.execute(notEnoughAddressesInput);
      } catch (e) {
        console.log(e);
        throw e;
      }
    }).toThrow();
  });
});
