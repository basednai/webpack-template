const image = document.querySelector("#iconImage")

export function getIcon(iconName) {
    image.src = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/4th%20Set%20-%20Color/${iconName}.svg`
}