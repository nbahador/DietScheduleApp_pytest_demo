document.getElementById('diet-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission to check inputs

    // Collect input values
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const season = document.getElementById('season').value;
    const country = document.getElementById('country').value;
    const activityLevel = document.getElementById('activity-level').value;

    // Validate inputs (type & range)
    const validationError = validateInputs(age, weight, height);
    if (validationError) {
        alert(validationError);
        return; // Stop further processing if input is invalid
    }

    // Simulate fetching weather data based on the country (this is just a placeholder)
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

// Simulate fetching weather data (this function is a placeholder and will return 'hot' weather)
function fetchWeather(country) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hot'); // Placeholder response for hot weather
        }, 1000);
    });
}

// Function to validate inputs (age, weight, height)
function validateInputs(age, weight, height) {
    // Validate age
    if (isNaN(age) || age <= 0 || age > 120) {
        return "Please enter a valid age (between 1 and 120).";
    }
    // Validate weight
    if (isNaN(weight) || weight <= 0 || weight > 300) {
        return "Please enter a valid weight (between 1 and 300kg).";
    }
    // Validate height
    if (isNaN(height) || height <= 0 || height > 250) {
        return "Please enter a valid height (between 1 and 250cm).";
    }
    return null; // No error
}

// Displaying the diet plan with macronutrient info in a beautiful table
function displayDiet(diet) {
    const dietSchedule = document.getElementById('diet-schedule');
    dietSchedule.innerHTML = `
        <h2>Your Personalized Diet Plan</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Amount (Per Day)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Total Calories</td>
                    <td>${diet.totalCalories} kcal</td>
                </tr>
                <tr>
                    <td>Protein Intake</td>
                    <td>${diet.protein} grams</td>
                </tr>
                <tr>
                    <td>Fat Intake</td>
                    <td>${diet.fats} grams</td>
                </tr>
                <tr>
                    <td>Carbohydrate Intake</td>
                    <td>${diet.carbs} grams</td>
                </tr>
            </tbody>
        </table>
        <p><strong>Seasonal Diet Suggestion:</strong> ${diet.seasonalDiet}</p>
    `;
}
