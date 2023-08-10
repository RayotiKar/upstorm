import React, { useState } from "react";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  // const [location, setLocation] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  // const handleSearchClick = () => {
  //   if (city !== "") setQuery({ q: city });
  //   setCity("");
  // };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      setQuery({ q: city });
      setCity("");
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      // toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <>
      <div className="w-full flex items-center justify-center pt-4">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-sb rounded-full flex justify-center items-center">
          <UilLocationPoint
            // size={28}
            className="text-black cursor-pointer transition ease-out hover:scale-150"
            onClick={handleLocationClick}
          />
        </div>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyUp={searchLocation}
          type="text"
          placeholder="🔍 Search for any location"
          className="text-base sm:text-xl font-Quicksand m-5 p-2 rounded-md h-7 sm:h-11 w-40 sm:w-60 md:w-96 bg-blue-sb shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <div className="h-7 sm:h-11 w-16 sm:w-24 rounded-md bg-blue-sb flex items-center justify-center">
          <button
            name="metric"
            className="font-semibold text-base sm:text-xl text-black font-Quicksand transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-xl text-blue-nav mx-1">|</p>
          <button
            name="imperial"
            className="font-semibold text-base sm:text-xl text-black font-Quicksand transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>
    </>
  );
}

export default Inputs;
