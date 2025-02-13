import pytest

# Input validation function (simulate the JavaScript validation)
def validate_inputs(age, weight, height):
    if not isinstance(age, int) or age <= 0 or age > 120:
        return "Invalid age. Please enter a valid age (between 1 and 120)."
    if not isinstance(weight, int) or weight <= 0 or weight > 300:
        return "Invalid weight. Please enter a valid weight (between 1 and 300kg)."
    if not isinstance(height, int) or height <= 0 or height > 250:
        return "Invalid height. Please enter a valid height (between 1 and 250cm)."
    return "Valid inputs"

# Tests
def test_valid_inputs():
    assert validate_inputs(25, 70, 175) == "Valid inputs"

def test_invalid_age():
    assert validate_inputs(-5, 70, 175) == "Invalid age. Please enter a valid age (between 1 and 120)."
    assert validate_inputs(130, 70, 175) == "Invalid age. Please enter a valid age (between 1 and 120)."
    assert validate_inputs("twenty", 70, 175) == "Invalid age. Please enter a valid age (between 1 and 120)."

def test_invalid_weight():
    assert validate_inputs(25, -10, 175) == "Invalid weight. Please enter a valid weight (between 1 and 300kg)."
    assert validate_inputs(25, 350, 175) == "Invalid weight. Please enter a valid weight (between 1 and 300kg)."
    assert validate_inputs(25, "heavy", 175) == "Invalid weight. Please enter a valid weight (between 1 and 300kg)."

def test_invalid_height():
    assert validate_inputs(25, 70, -5) == "Invalid height. Please enter a valid height (between 1 and 250cm)."
    assert validate_inputs(25, 70, 300) == "Invalid height. Please enter a valid height (between 1 and 250cm)."
    assert validate_inputs(25, 70, "tall") == "Invalid height. Please enter a valid height (between 1 and 250cm)."
