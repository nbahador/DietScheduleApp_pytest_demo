import pytest

# Input validation function (from JS to Python simulation)
def validate_inputs(age, weight, height):
    if not isinstance(age, int) or age <= 0 or age > 120:
        return "Invalid age. Please enter a valid age (between 1 and 120)."
    if not isinstance(weight, int) or weight <= 0 or weight > 300:
        return "Invalid weight. Please enter a valid weight (between 1 and 300kg)."
    if not isinstance(height, int) or height <= 0 or height > 250:
        return "Invalid height. Please enter a valid height (between 1 and 250cm)."
    return "Valid"

def test_valid_inputs():
    assert validate_inputs(25, 70, 170) == "Valid"
    assert validate_inputs(120, 50, 150) == "Valid"

def test_invalid_age():
    assert validate_inputs(-5, 70, 170) == "Invalid age. Please enter a valid age (between 1 and 120)."
    assert validate_inputs(150, 70, 170) == "Invalid age. Please enter a valid age (between 1 and 120)."

def test_invalid_weight():
    assert validate_inputs(25, -5, 170) == "Invalid weight. Please enter a valid weight (between 1 and 300kg)."
    assert validate_inputs(25, 350, 170) == "Invalid weight. Please enter a valid weight (between 1 and 300kg)."

def test_invalid_height():
    assert validate_inputs(25, 70, -5) == "Invalid height. Please enter a valid height (between 1 and 250cm)."
    assert validate_inputs(25, 70, 300) == "Invalid height. Please enter a valid height (between 1 and 250cm)."
