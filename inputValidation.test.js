const { validateInputs } = require('./script.js');  // Adjust this path if necessary

test('valid inputs', () => {
    expect(validateInputs(30, 70, 175)).toBe("Valid");
});

test('invalid age', () => {
    expect(validateInputs(-5, 70, 175)).toBe("Please enter a valid age (between 1 and 120).");
    expect(validateInputs(150, 70, 175)).toBe("Please enter a valid age (between 1 and 120).");
});

test('invalid weight', () => {
    expect(validateInputs(30, -5, 175)).toBe("Please enter a valid weight (between 1 and 300kg).");
    expect(validateInputs(30, 350, 175)).toBe("Please enter a valid weight (between 1 and 300kg).");
});

test('invalid height', () => {
    expect(validateInputs(30, 70, -5)).toBe("Please enter a valid height (between 1 and 250cm).");
    expect(validateInputs(30, 70, 300)).toBe("Please enter a valid height (between 1 and 250cm).");
});
