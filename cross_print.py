
def cross_print(n, m):
    for i in range(1, n + 1):
        row = ""
        for j in range(1, m + 1):
            row += "{:^5d}".format(i * j)
        print(row)


cross_print(9, 9)
