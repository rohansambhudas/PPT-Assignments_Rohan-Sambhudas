# Write a Python program to merge two sorted lists into a single sorted list.

import heapq

def merge_sorted_lists(list1, list2):
    merged_list = []
    heapq.merge(list1, list2, merged_list)
    return merged_list

list1 = [1, 4, 6, 8]
list2 = [2, 3, 5, 7, 9]
merged = merge_sorted_lists(list1, list2)
print("Merged list:", merged)