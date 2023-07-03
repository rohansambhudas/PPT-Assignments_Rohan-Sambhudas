# Write a program to find the sum of digits of a given number.

def sum_of_digits(number):
    # Convert the number to a string
    number_str = str(number)

    # Initialize a variable to store the sum of digits
    digit_sum = 0

    # Iterate through each character in the string
    for digit_char in number_str:
        # Convert the character back to an integer
        digit = int(digit_char)

        # Add the digit to the sum
        digit_sum += digit

    return digit_sum


number = 12345
digit_sum = sum_of_digits(number)
print(digit_sum)  # Output: 15