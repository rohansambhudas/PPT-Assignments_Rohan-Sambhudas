# Write a Python program to check if two strings are anagrams of each other.

def are_anagrams(str1, str2):
    return sorted(str1) == sorted(str2)


string1 = "listen"
string2 = "silent"
if are_anagrams(string1, string2):
    print("The strings are anagrams.")
else:
    print("The strings are not anagrams.")