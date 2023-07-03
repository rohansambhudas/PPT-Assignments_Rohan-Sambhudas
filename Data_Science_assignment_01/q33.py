# Write a Python program to remove duplicates from a list while preserving the order.

def remove_duplicates(lst):
    # Create an empty set to store unique elements
    seen = set()

    # Create a new list to store the result
    result = []

    # Iterate over the original list
    for item in lst:
        # Check if the item has been seen before
        if item not in seen:
            # If it's a new item, add it to the result list and the set
            result.append(item)
            seen.add(item)

    return result

original_list = [1, 2, 3, 2, 4, 3, 5]
new_list = remove_duplicates(original_list)
print(new_list)  # Output: [1, 2, 3, 4, 5]