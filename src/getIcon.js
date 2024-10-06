export async function getIcon(icon) {
    let url = "https://github.com/visualcrossing/WeatherIcons/blob/main/SVG/1st%20Set%20-%20Color/" + `${icon}.svg`
    const response = await fetch(url)

    console.log(response.json);

}