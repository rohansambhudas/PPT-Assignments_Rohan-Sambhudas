# Implement a function to check if a given string is a valid palindrome considering case sensitivity.

def is_valid_palindrome(s):
    # Remove non-alphanumeric characters and convert to lowercase
    s = ''.join(char.lower() for char in s if char.isalnum())

    # Check if the string is equal to its reverse
    return s == s[::-1]


string1 = "level"
print(is_valid_palindrome(string1))  # Output: True

string2 = "Hello"
print(is_valid_palindrome(string2))  # Output: False
