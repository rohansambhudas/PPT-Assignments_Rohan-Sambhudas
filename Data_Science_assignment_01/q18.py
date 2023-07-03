# Implement a function to find the maximum subarray sum in a given list.

def max_subarray_sum(nums):
    max_sum = float('-inf')
    current_sum = 0

    for num in nums:
        current_sum += num
        if current_sum > max_sum:
            max_sum = current_sum
        if current_sum < 0:
            current_sum = 0

    return max_sum

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
max_sum = max_subarray_sum(nums)
print(max_sum)  # Output: 6