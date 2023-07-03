# Write a program to find the largest element in a given list.

def find_largest_element(lst):
    if not lst:
        return None

    largest = lst[0]
    for num in lst:
        if num > largest:
            largest = num

    return largest

# Test the function
numbers = [10, 5, 20, 15, 25, 8]
largest_number = find_largest_element(numbers)
print("The largest element is:", largest_number)