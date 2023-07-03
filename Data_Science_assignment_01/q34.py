# Implement a function to find the longest common prefix among a list of strings.

def longest_common_prefix(strs):
    if not strs:
        return ""

    # Find the minimum length string in the list
    min_len = min(len(s) for s in strs)

    # Iterate over the characters at each position
    for i in range(min_len):
        # Check if all characters at position i are the same
        if any(s[i] != strs[0][i] for s in strs):
            # If there is a mismatch, return the prefix up to the previous position
            return strs[0][:i]

    # If no mismatch is found, return the entire string at position 0
    return strs[0]


strings = ["flower", "flow", "flight"]
prefix = longest_common_prefix(strings)
print(prefix)  # Output: "fl"