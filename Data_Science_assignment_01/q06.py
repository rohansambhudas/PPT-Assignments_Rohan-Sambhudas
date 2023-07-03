# Implement a function to remove duplicate elements from a list.

def remove_duplicates(lst):
    return list(set(lst))

# Test the function
numbers = [1, 2, 3, 3, 4, 4, 5]
unique_numbers = remove_duplicates(numbers)
print("List with duplicates:", numbers)
print("List without duplicates:", unique_numbers)