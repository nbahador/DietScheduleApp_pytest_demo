document.getElementById('diet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const season = document.getElementById('season').value;
    const country = document.getElementById('country').value;

    // Fetch weather data for the country
    fetchWeather(country).then(weather => {
        // Calculate diet based on age, weight, height, season, and weather
        const diet = generateDiet(age, weight, height, season, weather);
        
        // Display the diet schedule
        displayDiet(diet);
    });
});

function generateDiet(age, weight, height, season, weather) {
    // This is a basic template of how the diet plan can be structured
    let diet = `Your diet plan based on the following info: \n`;
    diet += `Age: ${age}, Weight: ${weight}kg, Height: ${height}cm, Season: ${season}, Weather: ${weather}\n`;

    // Example logic for diet generation (this can be expanded)
    if (season === 'summer' && weather === 'hot') {
        diet += `Suggested Diet: Light meals, fruits, and hydrating foods.\n`;
    } else if (season === 'winter' && weather === 'cold') {
        diet += `Suggested Diet: Warm meals, soups, and hearty foods.\n`;
    }
    // Add more logic based on user's age, weight, height, etc.

    return diet;
}

function fetchWeather(country) {
    // Fetch weather data (this can be improved with a real API)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hot'); // Placeholder: assuming hot weather for simplicity
        }, 1000);
    });
}

function displayDiet(diet) {
    const dietSchedule = document.getElementById('diet-schedule');
    dietSchedule.textContent = diet;
}
