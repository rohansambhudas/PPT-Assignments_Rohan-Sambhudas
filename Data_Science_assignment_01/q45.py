# Write a Python program to remove all duplicates from a string.

def remove_duplicates(string):
    # Create an empty set to store unique characters
    unique_chars = set()

    # Initialize an empty string to store the result
    result = ""

    # Iterate over each character in the string
    for char in string:
        # Check if the character is not already in the set
        if char not in unique_chars:
            # Add the character to the set
            unique_chars.add(char)
            # Append the character to the result string
            result += char

    return result


string = "Hello, World!"
print(remove_duplicates(string))  # Output: Helo, Wrd!