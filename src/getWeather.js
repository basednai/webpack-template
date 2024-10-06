import { locationString } from "./getLocation";
import { locationInput } from "./getLocation";
import { weatherContainer } from "./weatherContainer";

const apiKey = "Q24UZSARHJ28JJ9B73ZM8UTLW";

export let weather;
export async function getWeather() {

  if (!localStorage.getItem("weather")) {
    // use local storage to reduce api calls
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(
          locationString
        )}/today?unitGroup=us&include=hours%2Ccurrent%2Calerts&key=${apiKey}&contentType=json`
      );
      const responseData = await response.json();

      localStorage.setItem("weather", JSON.stringify(responseData));
      weather = responseData;
      console.log("api hit", responseData);
    } catch (error) {
      console.error(error);
    }
  } else {
    weather = JSON.parse(localStorage.getItem("weather"));
    console.log("memory hit", weather);
  }
  weatherContainer(weather);
  locationInput.value = weather.resolvedAddress;
}

getWeather();
