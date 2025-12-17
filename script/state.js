const content = document.getElementById("content");

export const state = {
    status: "idle",
    data: null,
    error: null
};

export function setState(newState) {
    Object.assign(state, newState);
    render();
}

function render() {
    content.innerHTML = "";

    if (state.status === "loading") {
        content.innerHTML = `<p class="loading">Loading weather...</p>`;
    }

    if (state.status === "error") {
        content.innerHTML = `<p class="error">${state.error}</p>`;
    }

    if (state.status === "success") {
        content.innerHTML = `
      <div class="weather">
        <h2>${state.data.name}</h2>
        <p class="temp">${Math.round(state.data.main.temp)}°C</p>
        <p>${state.data.weather[0].description}</p>
      </div>
    `;
    }
}
