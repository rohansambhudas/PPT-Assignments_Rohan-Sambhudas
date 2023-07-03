# Write a program to find the number of occurrences of a given element in a list.

def count_occurrences(lst, element):
    count = 0
    for item in lst:
        if item == element:
            count += 1
    return count

my_list = [1, 2, 3, 4, 1, 2, 1, 5]
element = 1
print(count_occurrences(my_list, element))  # Output: 3

my_list = [1, 2, 3, 4, 1, 2, 1, 5]
element = 2
print(count_occurrences(my_list, element))  # Output: 2