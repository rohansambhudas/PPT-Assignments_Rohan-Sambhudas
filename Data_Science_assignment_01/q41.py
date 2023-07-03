# Write a Python program to find the smallest missing positive integer in a list.

def find_smallest_missing_positive(nums):
    # Separate positive numbers from non-positive numbers
    positive_nums = [num for num in nums if num > 0]
    
    # Check if the list is empty
    if not positive_nums:
        return 1
    
    # Create a set for constant time lookup
    num_set = set(positive_nums)
    
    # Find the smallest missing positive integer
    n = 1
    while n in num_set:
        n += 1
    
    return n

numbers = [3, 4, -1, 1]
print(find_smallest_missing_positive(numbers))  # Output: 2

numbers = [1, 2, 0]
print(find_smallest_missing_positive(numbers))  # Output: 3

numbers = [-1, -2, -3]
print(find_smallest_missing_positive(numbers))  # Output: 1