const API_TOKEN = "YOUR_TOKEN_HERE";

function checkAQI() {
    const city = document.getElementById("citySelect").value;
    const url = `https://api.waqi.info/feed/${city}/?token=${API_TOKEN}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status !== "ok") {
                alert("Unable to fetch data!");
                return;
            }

            const aqi = data.data.aqi;
            const iaqi = data.data.iaqi;

            document.getElementById("resultBox").style.display = "block";
            document.getElementById("cityName").innerText = city.toUpperCase();
            document.getElementById("aqiValue").innerText = `AQI: ${aqi}`;

            // Health Advice
            document.getElementById("healthMessage").innerText = getHealthAdvice(aqi);

            // Pollutants
            document.getElementById("pollutants").innerHTML = `
            PM2.5: ${iaqi.pm25?.v || "N/A"}<br>
            PM10 : ${iaqi.pm10?.v || "N/A"}<br>
            O₃   : ${iaqi.o3?.v || "N/A"}<br>
            NO₂  : ${iaqi.no2?.v || "N/A"}<br>
            SO₂  : ${iaqi.so2?.v || "N/A"}<br>
            CO   : ${iaqi.co?.v || "N/A"}
          `;
        });
}

// Health Advice Based on AQI
function getHealthAdvice(aqi) {
    if (aqi <= 50) return "🟢 Good: Air quality is safe.";
    if (aqi <= 100) return "🟡 Moderate: Acceptable but may affect sensitive groups.";
    if (aqi <= 150) return "🟠 Unhealthy for sensitive groups.";
    if (aqi <= 200) return "🔴 Unhealthy: Avoid outdoor activities.";
    if (aqi <= 300) return "🟣 Very Unhealthy: Stay indoors.";
    return "⚫ Hazardous: Serious health risks!";
}