# Implement a function to find the longest palindrome substring in a given string.

def longest_palindrome(s):
    if not s:
        return ""

    start = 0
    end = 0

    for i in range(len(s)):
        len1 = expand_from_center(s, i, i)
        len2 = expand_from_center(s, i, i+1)
        length = max(len1, len2)

        if length > end - start:
            start = i - (length - 1) // 2
            end = i + length // 2

    return s[start:end+1]


def expand_from_center(s, left, right):
    while left >= 0 and right < len(s) and s[left] == s[right]:
        left -= 1
        right += 1

    return right - left - 1


string = "babad"
print(longest_palindrome(string))  # Output: "bab"

string = "cbbd"
print(longest_palindrome(string))  # Output: "bb"