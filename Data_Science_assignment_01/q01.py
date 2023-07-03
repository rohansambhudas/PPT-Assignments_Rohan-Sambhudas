# Write a Python program to reverse a string without using any built-in string reversal functions.

def reverse_string(string):
    # Convert the string to a list of characters
    chars = list(string)

    # Initialize pointers for the start and end of the string
    start = 0
    end = len(chars) - 1

    # Swap characters from start to end until they meet in the middle
    while start < end:
        # Swap characters
        chars[start], chars[end] = chars[end], chars[start]
        # Move pointers towards the middle
        start += 1
        end -= 1

    # Convert the list of characters back to a string
    reversed_string = ''.join(chars)

    return reversed_string


# Test the function
input_string = "Hello, World!"
reversed_string = reverse_string(input_string)
print(reversed_string)