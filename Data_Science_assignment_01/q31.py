# Write a program to find the sum of all even numbers in a list.

def sum_even_numbers(numbers):
    sum_even = 0
    for num in numbers:
        if num % 2 == 0:
            sum_even += num
    return sum_even


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = sum_even_numbers(numbers)
print(result)  # Output: 30