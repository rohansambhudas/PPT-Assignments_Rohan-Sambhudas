# Implement a function to reverse the order of words in a given sentence.\

def reverse_words(sentence):
    words = sentence.split()  # Split the sentence into a list of words
    reversed_words = words[::-1]  # Reverse the order of words
    reversed_sentence = " ".join(reversed_words)  # Join the reversed words into a sentence
    return reversed_sentence


sentence = "Hello, World! This is a sentence."
reversed_sentence = reverse_words(sentence)
print(reversed_sentence)  # Output: "sentence. a is This World! Hello,"