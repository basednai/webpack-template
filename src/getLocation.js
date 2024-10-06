import { getWeather } from "./getWeather";

const locationInput = document.querySelector("#location");
const locationForm = document.querySelector("#locationForm");
export let locationString = "Dallas, TX";

locationForm.addEventListener("submit", () => {
  getLocation(locationInput.value);
});

export function getLocation(location) {
    if (location && location != locationString) {
      locationString = location;
      localStorage.clear(); // empty local storage
      locationForm.reset();
    }
    getWeather();
}

