#  Implement a function to find the minimum element in a rotated sorted list.

def find_min(nums):
    # Check if the list is empty
    if not nums:
        return None

    # Set the left and right pointers
    left, right = 0, len(nums) - 1

    # Perform binary search
    while left < right:
        # Calculate the mid index
        mid = left + (right - left) // 2

        # Check if the mid element is greater than the right element
        if nums[mid] > nums[right]:
            # The minimum element is in the right half
            left = mid + 1
        else:
            # The minimum element is in the left half or is the mid element
            right = mid

    # The left pointer will point to the minimum element
    return nums[left]

nums1 = [4, 5, 6, 7, 0, 1, 2]
print(find_min(nums1))  # Output: 0

nums2 = [3, 4, 5, 1, 2]
print(find_min(nums2))  # Output: 1

nums3 = [1]
print(find_min(nums3))  # Output: 1
