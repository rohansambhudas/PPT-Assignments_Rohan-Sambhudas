# Implement a function to calculate the Fibonacci sequence up to a given number of terms.

def fibonacci_sequence(n):
    # Check if the number of terms is valid
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]

    # Initialize the Fibonacci sequence
    sequence = [0, 1]

    # Generate the Fibonacci sequence up to n terms
    while len(sequence) < n:
        next_number = sequence[-1] + sequence[-2]
        sequence.append(next_number)

    return sequence