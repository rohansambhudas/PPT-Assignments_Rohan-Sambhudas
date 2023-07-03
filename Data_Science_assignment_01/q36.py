# Implement a function to calculate the product of all elements in a list.

def calculate_product(nums):
    product = 1
    for num in nums:
        product *= num
    return product


numbers = [2, 3, 4, 5]
product = calculate_product(numbers)
print(product)  # Output: 120