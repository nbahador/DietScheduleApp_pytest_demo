document.getElementById('diet-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Collect input values
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const height = parseInt(document.getElementById('height').value);
    const season = document.getElementById('season').value;
    const country = document.getElementById('country').value;
    const activityLevel = document.getElementById('activity-level').value;

    // Fetch weather data for the country (This is a placeholder)
    fetchWeather(country).then(weather => {
        // Calculate the diet and nutritional needs
        const diet = generateDiet(age, weight, height, season, weather, activityLevel);

        // Display the results
        displayDiet(diet);
    });
});

// Function to calculate the daily protein and other macronutrient needs
function generateDiet(age, weight, height, season, weather, activityLevel) {
    // Basal Metabolic Rate (BMR) Calculation (Mifflin-St Jeor Equation)
    let bmr;
    if (age > 18) {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Male
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // Female
    }

    // Adjust for activity level
    let activityFactor = 1.2;
    if (activityLevel === 'lightly-active') activityFactor = 1.375;
    else if (activityLevel === 'moderately-active') activityFactor = 1.55;
    else if (activityLevel === 'very-active') activityFactor = 1.725;

    const totalCalories = bmr * activityFactor;

    // Macronutrient breakdown (example distribution)
    const proteinIntake = (weight * 2.2); // 2.2 grams per kg body weight for protein
    const fatIntake = totalCalories * 0.25 / 9; // 25% of calories from fat
    const carbIntake = (totalCalories - (proteinIntake * 4 + fatIntake * 9)) / 4; // The rest from carbs

    // Seasonal diet recommendations (example)
    let seasonalDiet = '';
    if (season === 'summer' && weather === 'hot') {
        seasonalDiet = 'Light meals, fruits, and hydrating foods.';
    } else if (season === 'winter' && weather === 'cold') {
        seasonalDiet = 'Warm meals, soups, and hearty foods.';
    }

    // Returning the diet information in an object
    return {
        totalCalories: Math.round(totalCalories),
        protein: Math.round(proteinIntake),
        fats: Math.round(fatIntake),
        carbs: Math.round(carbIntake),
        seasonalDiet: seasonalDiet
    };
}

// Fetch weather data (this function is a placeholder and will return 'hot' weather)
function fetchWeather(country) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hot'); // Placeholder response for hot weather
        }, 1000);
    });
}

// Displaying the diet plan with macronutrient info
function displayDiet(diet) {
    const dietSchedule = document.getElementById('diet-schedule');
    dietSchedule.innerHTML = `
        <h2>Your Personalized Diet Plan</h2>
        <p><strong>Daily Calories:</strong> ${diet.totalCalories} kcal</p>
        <p><strong>Protein Intake:</strong> ${diet.protein} grams</p>
        <p><strong>Fat Intake:</strong> ${diet.fats} grams</p>
        <p><strong>Carbohydrate Intake:</strong> ${diet.carbs} grams</p>
        <p><strong>Seasonal Diet Suggestion:</strong> ${diet.seasonalDiet}</p>
    `;
}
