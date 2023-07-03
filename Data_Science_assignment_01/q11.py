# Write a program to find the common elements between two lists.

def find_common_elements(list1, list2):
    common_elements = set(list1) & set(list2)
    return list(common_elements)

# Test the function
list1 = [1, 2, 3, 4, 5]
list2 = [4, 5, 6, 7, 8]
common_elements = find_common_elements(list1, list2)
print("Common elements:", common_elements)