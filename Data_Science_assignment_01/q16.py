# Implement a function to check if a given list is sorted in non-decreasing order.

def is_sorted(lst):
    return all(lst[i] <= lst[i+1] for i in range(len(lst)-1))

my_list = [1, 3, 5, 7, 9]
print(is_sorted(my_list))  # Output: True

another_list = [4, 2, 7, 1, 5]
print(is_sorted(another_list))  # Output: False