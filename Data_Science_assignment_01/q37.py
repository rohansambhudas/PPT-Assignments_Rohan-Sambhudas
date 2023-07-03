# Write a Python program to reverse the order of words in a sentence while preserving the word order.

def reverse_sentence(sentence):
    # Split the sentence into words
    words = sentence.split()

    # Reverse the order of words
    reversed_words = words[::-1]

    # Join the reversed words to form the reversed sentence
    reversed_sentence = " ".join(reversed_words)

    return reversed_sentence

sentence = "Hello, how are you today?"
reversed_sentence = reverse_sentence(sentence)
print(reversed_sentence)  # Output: "today? you are how Hello,"