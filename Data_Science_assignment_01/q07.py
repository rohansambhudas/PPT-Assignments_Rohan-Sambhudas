# Write a program to calculate the factorial of a given number.

def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Test the program
number = int(input("Enter a number: "))
result = factorial(number)
print("Factorial of", number, "is", result)