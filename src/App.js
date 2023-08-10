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

  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <>
      <div className="bg-blue-body h-screen w-full">
        <div className="h-16 bg-blue-nav flex justify-center items-center">
          <img src={logo} alt="logo" className="w-16 h-16"></img>
          <p className="font-Jua text-3xl">Upstorm</p>
        </div>

        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
        <div className="flex rounded-md bg-blue-sb w-10/12 mx-48 mt-3 bg-cloud-bg bg-cover">
          {weather && (
            <div className="flex">
              {/* <TimeAndLocation weather={weather} /> */}
              <div>
                <TemperatureAndDetails weather={weather} />
              </div>

              <div className="ml-20 px-10">
                <div className="mt-8">
                  <Forecast title="hourly forecast" items={weather.hourly} />
                </div>
                <div className="mt-8">
                  <Forecast title="daily forecast" items={weather.daily} />
                </div>
              </div>
            </div>
          )}
        </div>
        <ToastContainer autoClose={1000} theme="colored" newestOnTop={true} />
      </div>
    </>
  );
}

export default App;

