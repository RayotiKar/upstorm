import React from "react";
//import { useState } from "react";
// import Forecast from "./Forecast";

import {
  formatDate,
  formatToLocalTime,
  iconUrlFromCode,
} from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    name,
    country,
    details,
    icon,
    temp,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
    dt,
  },
  // title,
  // items,
}) {
  // const [weather, setWeather] = useState(null);
  return (
    <>
      <div className="flex">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-evenly text-blue-body py-3 w-52 sm:w-auto h-36 sm:h-auto bg-white bg-opacity-50 rounded-md">
            <div>
              <img
                src={iconUrlFromCode(icon)}
                alt="weather icon"
                className="w-28 h-28 sm:w-40 sm:h-40 fill-current"
              />
            </div>
            <div className="pr-6">
              <p className="text-blue-body text-lg sm:text-3xl font-medium">{`${name}, ${country}`}</p>
              <p className="text-xl sm:text-4xl font-semibold sm:font-normal">{`${temp.toFixed()}°`}</p>
              <p className="text-blue-body text-xs sm:text-base font-normal">{details}</p>

              <div className="flex font-normal text-xs sm:text-base text-blue-body">
                Feels like
                <span className="font-normal text-xs sm:text-base ml-1 text-blue-body">{`${feels_like.toFixed()}°`}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-body text-xs sm:text-base font-normal">
                  {formatDate(dt, timezone)}
                </span>
                <span className="text-blue-body text-xs sm:text-base font-normal">
                  {formatToLocalTime(dt, timezone)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-evenly">
            <div className=" uppercase font-medium text-sm sm:text-lg text-black my-3">
              Today's Highlights
            </div>
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col w-24 sm:w-44 justify-evenly">
                <span className="ml-1 text-xs sm:text-sm text-blue-body">Humidity</span>
                <span className="mx-10 sm:mx-20 text-lg font-semibold text-blue-body">{`${humidity.toFixed()}`}</span>
                <span className="ml-1 text-xs sm:text-sm text-blue-body">%</span>
              </div>
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col ml-4 w-24 sm:w-44 justify-evenly">
                <span className="ml-1 text-xs sm:text-sm text-blue-body">Wind</span>
                <span className="mx-11 sm:mx-20 text-lg font-semibold text-blue-body">{`${speed.toFixed()}`}</span>
                <span className="ml-1 text-xs sm:text-sm text-blue-body">km/h</span>
              </div>
            </div>
            <div className="flex jjustify-center">
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col mt-6 w-24 sm:w-44 justify-evenly">
                <span className="ml-1 text-xs sm:text-sm text-blue-body">Sunrise</span>
                <span className="mx-7 sm:mx-14 text-lg font-semibold text-blue-body">
                  {formatToLocalTime(sunrise, timezone, "hh:mm")}
                </span>
                <span className=" ml-1 text-xs sm:text-sm text-blue-body">am</span>
              </div>
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col mt-6 ml-4 w-24 sm:w-44 justify-evenly">
                <span className="ml-1 text-xs sm:text-sm text-blue-body">Sunset</span>
                <span className="mx-7 sm:mx-14 text-lg font-semibold text-blue-body">
                  {formatToLocalTime(sunset, timezone, "hh:mm")}
                </span>
                <span className=" ml-1 text-xs sm:text-sm text-blue-body">pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemperatureAndDetails;
