# Implement a function to find the first missing positive

def find_first_missing_positive(nums):
    # Move all non-positive numbers to the left side of the list
    i = 0
    while i < len(nums):
        if nums[i] <= 0 or nums[i] > len(nums):
            i += 1
        elif nums[nums[i] - 1] != nums[i]:
            nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
        else:
            i += 1

    # Find the first missing positive number
    for i in range(len(nums)):
        if nums[i] != i + 1:
            return i + 1

    # If all positive numbers are present, the missing number is len(nums) + 1
    return len(nums) + 1


nums = [3, 4, -1, 1]
print(find_first_missing_positive(nums))  # Output: 2