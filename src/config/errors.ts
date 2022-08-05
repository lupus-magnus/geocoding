export interface CustomErrorType extends Error {
  code: string;
  httpStatus: number;
}

type CustomErrorCodes = "default" | "min.addresses" | "missing.header";

export const errors: Record<CustomErrorCodes, CustomErrorType> = {
  "min.addresses": {
    name: "Less than 3 addresses received",
    message:
      "It should receive three or more addresses for performing the distances calculations",
    code: "min.addresses",
    httpStatus: 400,
  },
  "missing.header": {
    name: "Addresses header not received",
    message: "Please inform the addresses through the request headers.",
    code: "missing.header",
    httpStatus: 400,
  },
  default: {
    name: "Unexpected Error",
    message: "Unexpected Error.",
    code: "default",
    httpStatus: 500,
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
    console.log(this);
  }
}
