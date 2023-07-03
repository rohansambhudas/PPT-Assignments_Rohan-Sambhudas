#  Write a program to check if a given number is a perfect square

import math

def is_perfect_square(num):
    # Calculate the square root of the number
    sqrt = math.sqrt(num)
    
    # Check if the square root is an integer
    return sqrt == int(sqrt)


number = 25
is_square = is_perfect_square(number)
print(is_square)  # Output: True