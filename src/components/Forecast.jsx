import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div className="bg-white bg-opacity-50 rounded-md py-2 h-48">
      <div className="flex items-center justify-start mt-4">
        <p className="text-blue-body font-medium uppercase pl-3">{title}</p>
      </div>
      <hr className="my-2 mx-3 " />

      <div className="flex flex-row items-center justify-between text-blue-body">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-4"
          >
            <p className="font-light text-blue-body text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
