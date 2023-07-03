# Implement a function to find the mode of a list of numbers.

import statistics

def find_mode(numbers):
    try:
        mode = statistics.mode(numbers)
        return mode
    except statistics.StatisticsError:
        return None

numbers = [1, 2, 3, 2, 4, 3, 2, 1, 2]
mode = find_mode(numbers)
if mode is not None:
    print("Mode:", mode)
else:
    print("No unique mode found.")