import {
  MeasuredAddressPairsDTO,
  SingleMeasuredAddressPairDTO,
} from "./Haversine";

export type ApiResponseType = {
  distances: MeasuredAddressPairsDTO;
  farthest: SingleMeasuredAddressPairDTO;
  nearest: SingleMeasuredAddressPairDTO;
};
