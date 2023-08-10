import "./App.css";

import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./assets/logo.svg";

function App() {
  const [query, setQuery] = useState(null);
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div className="flex items-center flex-col bg-blue-body h-fit 2xl:h-screen w-full">
        <div className="h-16 bg-blue-nav w-full flex justify-center items-center">
          <img src={logo} alt="logo" className="w-16 h-16"></img>
          <p className="font-Jua text-3xl">Upstorm</p>
        </div>

        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        {weather && (
        <div className="flex justify-center items-center h-auto rounded-md p-6 bg-blue-sb w-9/12 bg-cloud-bg bg-cover">
            <div className="flex justify-center items-center flex-wrap">
              <div className="">
                <TemperatureAndDetails weather={weather} />
              </div>

              <div className="pl-0 xl:pl-10 mt-10 xl:mt-0 ">
                <div className="">
                  <Forecast title="hourly forecast" items={weather.hourly} />
                </div>
                <div className="mt-10">
                  <Forecast title="daily forecast" items={weather.daily} />
                </div>
              </div>
            </div>
          </div>
          )}
        <ToastContainer autoClose={1000} theme="colored" newestOnTop={true} />
      </div>
    </>
  );
}

export default App;

