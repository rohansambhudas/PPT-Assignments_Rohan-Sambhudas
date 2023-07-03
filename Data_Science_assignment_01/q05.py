# Write a Python program to find the second largest number in a list.

def find_second_largest(numbers):
    if len(numbers) < 2:
        return None

    largest = float('-inf')
    second_largest = float('-inf')

    for num in numbers:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num < largest:
            second_largest = num

    if second_largest == float('-inf'):
        return None
    else:
        return second_largest

# Test the program
numbers = [5, 2, 8, 9, 1, 10]
second_largest = find_second_largest(numbers)
if second_largest is not None:
    print("The second largest number is:", second_largest)
else:
    print("There is no second largest number.")