# Implement a function to find the missing number in a given list of consecutive numbers.

def find_missing_number(numbers):
    # Calculate the expected sum of consecutive numbers
    n = len(numbers) + 1
    expected_sum = (n * (n + 1)) // 2

    # Calculate the actual sum of the given numbers
    actual_sum = sum(numbers)

    # Find the missing number
    missing_number = expected_sum - actual_sum

    return missing_number


numbers = [1, 2, 3, 5, 6, 7, 8]
missing_number = find_missing_number(numbers)
print(missing_number)  # Output: 4