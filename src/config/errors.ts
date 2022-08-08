export interface CustomErrorType extends Error {
  code: string;
  httpStatus: number;
}

type CustomErrorCodes =
  | "default"
  | "min.addresses"
  | "missing.addresses"
  | "specificity.error"
  | "not.found"
  | "axios.error"
  | "api.unauthorized";

export const errors: Record<CustomErrorCodes, CustomErrorType> = {
  default: {
    name: "Unexpected Error",
    message: "Unexpected Error.",
    code: "default",
    httpStatus: 500,
  },
  "min.addresses": {
    name: "Less than 3 addresses received",
    message:
      "It should receive three or more addresses for performing the distances calculations",
    code: "min.addresses",
    httpStatus: 400,
  },
  "missing.addresses": {
    name: "The addresses query param was not received",
    message: "Please inform the addresses as a query param.",
    code: "missing.addresses",
    httpStatus: 400,
  },
  "specificity.error": {
    name: "Specificity error",
    message:
      "At least one address encountered multiple results. Please, be as specific as possible.",
    code: "specificity.error",
    httpStatus: 400,
  },
  "not.found": {
    name: "Address not found",
    message:
      "One or more of the informed addresses were not found. Please, double-check your input for any typing errors.",
    code: "not.found",
    httpStatus: 404,
  },
  "axios.error": {
    name: "Error on Geocoding API request",
    message: "The request for Google's Geocoding API did not succeed.",
    code: "axios.error",
    httpStatus: 500,
  },
  "api.unauthorized": {
    name: "Invalid API key",
    message: "The api key for google's geocoding service is invalid.",
    code: "api.unauthorized",
    httpStatus: 401,
  },
};

export class CustomError implements CustomErrorType {
  message: string;
  name: string;
  httpStatus: number;

  constructor(public code: CustomErrorCodes) {
    this.message = errors[code].message;
    this.code = code;
    this.name = errors[code].name;
    this.httpStatus = errors[code].httpStatus;
    // console.log(this);
  }
}
