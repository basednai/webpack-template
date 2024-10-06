import "./styles.css";
import "./getWeather";
import "./weatherContainer";





// Promise Implementation
// if (!localStorage.getItem("weather")) {
//   fetch(url, {
//     method: "GET",
//     headers: {},
//   })
//     .then((response) => {
//       weather = response.json();
//       localStorage.setItem("weather", JSON.stringify(weather));
//       console.log(response.json());
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// } else {
//   weather = JSON.parse(localStorage.getItem("weather"));
// }