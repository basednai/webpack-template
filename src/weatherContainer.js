import { getIcon } from "./getIcon";

const weatherBox = document.querySelector(".weatherContainer");
const time = weatherBox.querySelector("#time");
const icon = weatherBox.querySelector("#icon");
const currentTemp = weatherBox.querySelector("#currentTemp");
const feelsLike = weatherBox.querySelector("#feelsLike");
const conditions = weatherBox.querySelector("#conditions");
const wind = weatherBox.querySelector("#wind");
const precipitation = weatherBox.querySelector("#precipitation");

export function weatherContainer(response) {
  time.textContent = tConvert(response.currentConditions.datetime);
  icon.textContent = response.currentConditions.icon;
  currentTemp.textContent = response.currentConditions.temp;
  feelsLike.textContent = response.currentConditions.feelslike;
  conditions.textContent = response.currentConditions.conditions;
  wind.textContent = response.currentConditions.windspeed;
    precipitation.textContent = response.currentConditions.precipprob;

    getIcon(response.currentConditions.icon)
}

function tConvert(time) {
  // Check correct time format (HH:MM:SS) and split into components
  time = time.toString().match(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format is correct
    time = time.slice(1, 3); // Remove full string match and the seconds part (keep HH and MM)
    time[2] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours (convert 24-hour to 12-hour format)
  }

  return time[0] + ":" + time[1] + time[2]; // Return adjusted time in HH:MM format with AM/PM
}

