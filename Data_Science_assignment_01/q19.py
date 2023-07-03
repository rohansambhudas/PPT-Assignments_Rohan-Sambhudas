# Write a program to remove all vowels from a given string.

def remove_vowels(string):
    vowels = ['a', 'e', 'i', 'o', 'u']
    result = ""

    for char in string:
        if char.lower() not in vowels:
            result += char

    return result

string = "Hello, World!"
result = remove_vowels(string)
print(result)  # Output: "Hll, Wrld!"