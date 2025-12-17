import { fetchWeather } from "./api.js";
import { setState } from "./state.js";

const form = document.getElementById("searchForm");
const input = document.getElementById("cityInput");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (!city) return;

    setState({ status: "loading", error: null });

    try {
        const data = await fetchWeather(city);
        setState({ status: "success", data });
    } catch (err) {
        setState({ status: "error", error: err.message });
    }
});
