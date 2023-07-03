# Implement a function to check if a given number is a perfect number.

def is_perfect_number(num):
    if num <= 0:
        return False

    divisor_sum = 0
    for i in range(1, num):
        if num % i == 0:
            divisor_sum += i

    return divisor_sum == num


number = 28
print(is_perfect_number(number))  # Output: True

number = 12
print(is_perfect_number(number))  # Output: False