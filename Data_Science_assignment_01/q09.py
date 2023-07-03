# Write a Python program to sort a list of integers in ascending order.

def sort_list(numbers):
    numbers.sort()

# Test the function
number_list = [5, 2, 8, 1, 9, 3]
print("Original list:", number_list)
sort_list(number_list)
print("Sorted list:", number_list)