const BASE_URL = "https://withered-firefly-77a1.meshoryneha222.workers.dev";

export async function fetchWeather(city) {
  const res = await fetch(`${BASE_URL}?city=${encodeURIComponent(city)}`);

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
}
