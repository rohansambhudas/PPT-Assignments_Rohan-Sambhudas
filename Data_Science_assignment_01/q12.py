# Implement a function to check if a given string is an anagram of another string.

def is_anagram(str1, str2):
    # Convert both strings to lowercase and remove whitespace
    str1 = str1.lower().replace(" ", "")
    str2 = str2.lower().replace(" ", "")
    
    # Check if the lengths of the strings are equal
    if len(str1) != len(str2):
        return False
    
    # Sort the characters of both strings
    sorted_str1 = sorted(str1)
    sorted_str2 = sorted(str2)
    
    # Compare the sorted strings
    if sorted_str1 == sorted_str2:
        return True
    else:
        return False

# Test the function
string1 = "listen"
string2 = "silent"
if is_anagram(string1, string2):
    print(f"{string1} and {string2} are anagrams.")
else:
    print(f"{string1} and {string2} are not anagrams.")