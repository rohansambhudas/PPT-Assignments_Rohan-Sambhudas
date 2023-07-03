# Write a Python program to generate all permutations of a given string.

import itertools

def generate_permutations(string):
    # Convert the string into a list of characters
    chars = list(string)
    
    # Generate all permutations using itertools.permutations
    perms = itertools.permutations(chars)
    
    # Convert each permutation back to a string and join them
    result = [''.join(perm) for perm in perms]
    
    return result

# Test the function
string = "abc"
permutations = generate_permutations(string)
for perm in permutations:
    print(perm)