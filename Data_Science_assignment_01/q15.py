# Write a program to find the median of a list of numbers.

def find_median(numbers):
    sorted_numbers = sorted(numbers)
    length = len(sorted_numbers)
    
    # Check if the list has an odd or even number of elements
    if length % 2 == 1:
        # If the list has an odd number of elements, return the middle element
        median = sorted_numbers[length // 2]
    else:
        # If the list has an even number of elements, calculate the average of the middle two elements
        middle_right = length // 2
        middle_left = middle_right - 1
        median = (sorted_numbers[middle_left] + sorted_numbers[middle_right]) / 2
    
    return median