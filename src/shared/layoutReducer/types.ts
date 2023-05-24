import {pointsLoadingStatus} from "../../entities/point/types";
import {flightsLoadingStatus} from "../../entities/flight/model/types";

export type commonLoadingStatus = pointsLoadingStatus | flightsLoadingStatus | string;