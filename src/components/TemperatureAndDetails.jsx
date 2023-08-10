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
        <div className="flex flex-col">
          <div className="flex items-center justify-evenly text-blue-body py-3 bg-white bg-opacity-50 rounded-md">
            <div>
              <img
                src={iconUrlFromCode(icon)}
                alt="weather icon"
                className="w-40 h-40 fill-current"
              />
            </div>
            <div className="pr-6">
              <p className="text-blue-body text-3xl font-medium">{`${name}, ${country}`}</p>
              <p className="text-5xl">{`${temp.toFixed()}°`}</p>
              <p className="text-blue-body font-normal">{details}</p>

              <div className="flex font-normal text-base text-blue-body">
                Feels like
                <span className="font-normal ml-1 text-blue-body">{`${feels_like.toFixed()}°`}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-blue-body text-sm font-normal">
                  {formatDate(dt, timezone)}
                </span>
                <span className="text-blue-body text-sm font-normal">
                  {formatToLocalTime(dt, timezone)}
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <p className="font-medium text-lg text-black my-3">
              Today's Highlights
            </p>

            <div className="flex justify-between">
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col w-44">
                <span className="ml-1 text-blue-body">Humidity</span>
                <span className="mx-20 text-lg font-semibold text-blue-body">{`${humidity.toFixed()}`}</span>
                <span className="ml-1 text-blue-body">%</span>
              </div>
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col ml-4 w-44">
                <span className="ml-1 text-blue-body">Wind</span>
                <span className="mx-20 text-lg font-semibold text-blue-body">{`${speed.toFixed()}`}</span>
                <span className="ml-1 text-blue-body">km/h</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col mt-6 w-44">
                <span className="ml-1 text-blue-body">Sunrise</span>
                <span className="mx-16 text-lg font-semibold text-blue-body">
                  {formatToLocalTime(sunrise, timezone, "hh:mm")}
                </span>
                <span className=" ml-1 text-blue-body">am</span>
              </div>
              <div className="bg-white bg-opacity-50 rounded-md flex flex-col mt-6 w-44 ">
                <span className="ml-1 text-blue-body">Sunset</span>
                <span className="mx-16 text-lg font-semibold text-blue-body">
                  {formatToLocalTime(sunset, timezone, "hh:mm")}
                </span>
                <span className=" ml-1 text-blue-body">pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TemperatureAndDetails;
