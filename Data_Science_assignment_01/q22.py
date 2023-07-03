# Implement a function to find the first non-repeating character in a string.

def find_first_non_repeating_char(string):
    char_count = {}
    
    # Count the occurrences of each character
    for char in string:
        char_count[char] = char_count.get(char, 0) + 1
    
    # Find the first character with count 1
    for char in string:
        if char_count[char] == 1:
            return char
    
    # If no non-repeating character found, return None
    return None


string = "abracadabra"
result = find_first_non_repeating_char(string)
if result is not None:
    print("The first non-repeating character is:", result)
else:
    print("There is no non-repeating character in the string.")