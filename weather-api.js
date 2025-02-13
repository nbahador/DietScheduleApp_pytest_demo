// This is a placeholder function. You can replace it with an actual API like OpenWeatherMap
// For now, it just returns 'hot' as a dummy response.
function fetchWeather(country) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hot'); // Placeholder for actual weather condition
        }, 1000);
    });
}
