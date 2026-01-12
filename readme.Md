# 🌦 Weather Dashboard

**Live Demo:** https://miku-847.github.io/Weather-Dashboard/

A simple weather dashboard built using **vanilla JavaScript**, HTML, and CSS.  
Users can search for a city and view real-time weather data fetched from the OpenWeather API.

---
## How It Works
1. The user submits a city name through the search form
2. `main.js` handles the form event and updates the application state
3. `api.js` fetches weather data from the OpenWeather API
4. `state.js` updates the UI based on loading, success, or error state

---
## API Key & Security
api.js sends requests to a Cloudflare Worker, which securely proxies the OpenWeather API. This project does NOT expose the OpenWeather API key in the frontend.

This prevents:
- API key leakage
- abuse of the key
- client-side tampering

The frontend only communicates with the Cloudflare Worker endpoint.

---
## Project Structure
```
weather-dashboard/
│──screenshots/
│   └── weather.png
├── index.html
├── style.css
└── script/
    ├── main.js    # Handles user input and app flow
    ├── api.js     # Handles API requests
    └── state.js   # Manages application state and UI rendering
├── README.md
```

---
## Screenshot
<img src="screenshots/weather.png" width="650" alt="Weather Dashboard Screenshot">

---
## Purpose
This project was built as a **learning-focused frontend application** to practice:
- Asynchronous JavaScript
- API integration
- State-driven UI updates
- Code organization and readability

---
## Future Improvements
- Add recent search history using `localStorage`
- Support temperature unit toggle (°C / °F)
- Enhance UI responsiveness and accessibility
- Move API requests to a backend service to secure the API key

---
## License
This project is intended for learning and personal use.
