# Implement a function to check if a given number is a power of two.

def is_power_of_two(n):
    if n <= 0:
        return False
    return (n & (n - 1)) == 0

number = 16
result = is_power_of_two(number)
print(number, "is a power of two:", result)