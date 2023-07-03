# Implement a function to calculate the power of a number using recursion.

def power(base, exponent):
    # Base case: Any number raised to the power of 0 is 1
    if exponent == 0:
        return 1

    # Recursive case: Calculate the power using recursion
    return base * power(base, exponent - 1)

result = power(2, 3)
print(result)  # Output: 8
