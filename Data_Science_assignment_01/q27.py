# Write a program to find the greatest common divisor (GCD) of two numbers.

import math

def find_gcd(a, b):
    return math.gcd(a, b)


num1 = 24
num2 = 36

gcd = find_gcd(num1, num2)
print("GCD of", num1, "and", num2, "is:", gcd)