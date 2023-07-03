# Write a Python program to check if a given string is a valid palindrome ignoring non-alphanumeric characters.

import re

def is_valid_palindrome(s):
    # Remove non-alphanumeric characters
    s = re.sub('[^a-zA-Z0-9]', '', s)

    # Convert to lowercase
    s = s.lower()

    # Check if the string is equal to its reverse
    return s == s[::-1]

string1 = "A man, a plan, a canal: Panama"
print(is_valid_palindrome(string1))  # Output: True

string2 = "race a car"
print(is_valid_palindrome(string2))  # Output: False