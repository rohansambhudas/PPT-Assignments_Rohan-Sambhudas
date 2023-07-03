# Write a program to find the prime factors of a given number.

def find_prime_factors(n):
    factors = []
    i = 2

    while i * i <= n:
        if n % i == 0:
            factors.append(i)
            n //= i
        else:
            i += 1

    if n > 1:
        factors.append(n)

    return factors

number = 36
prime_factors = find_prime_factors(number)
print("Prime factors of", number, "are:", prime_factors)