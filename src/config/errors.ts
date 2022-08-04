interface CustomErrorType extends Error {
  code: string;
  httpStatus: number;
}

type CustomErrorCodes = "min.addresses";

export const errors: Record<CustomErrorCodes, CustomErrorType> = {
  "min.addresses": {
    name: "Less than 3 addresses received",
    message:
      "It should receive three or more addresses for performing the distances calculations",
    code: "min.addresses",
    httpStatus: 400,
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
  }
}
