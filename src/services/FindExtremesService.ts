import {
  MeasuredAddressPairsDTO,
  SingleMeasuredAddressPairDTO,
  ApiResponseType,
} from "src/interfaces";

export class FindExtremesService {
  static execute = (pairs: MeasuredAddressPairsDTO): ApiResponseType => {
    const farthest = pairs.reduce(function (prev, current) {
      return prev.distance > current.distance ? prev : current;
    });
    const nearest = pairs.reduce(function (prev, current) {
      return prev.distance < current.distance ? prev : current;
    });
    return { distances: pairs, farthest, nearest };
  };
}
