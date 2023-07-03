# Implement a function to check if a given string is a palindrome.

def is_palindrome(string):
    # Remove non-alphanumeric characters and convert to lowercase
    processed_string = ''.join(char.lower() for char in string if char.isalnum())

    # Check if the processed string is equal to its reverse
    return processed_string == processed_string[::-1]

# Test the function
input_string = "A man, a plan, a canal: Panama"
result = is_palindrome(input_string)
print(result)