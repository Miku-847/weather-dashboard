const API_KEY = "cfe08562f654561290362fcc7a5bd0af";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city) {
    const res = await fetch(
        `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) {
        throw new Error("City not found");
    }

    return res.json();
}
