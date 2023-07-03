#  Implement a function to count the occurrence of each element in a list.

def count_occurrences(lst):
    occurrence_count = {}

    for element in lst:
        if element in occurrence_count:
            occurrence_count[element] += 1
        else:
            occurrence_count[element] = 1

    return occurrence_count

# Test the function
numbers = [1, 2, 3, 4, 1, 2, 3, 2, 4, 5, 1, 2]
occurrences = count_occurrences(numbers)
print("Element occurrences:", occurrences)