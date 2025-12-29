import math

def standard_deviation(data):
    n = len(data)
    mean = sum(data) / n

    variance = sum((x - mean) ** 2 for x in data) / n
    std_dev = math.sqrt(variance)

    return round(std_dev, 3)
