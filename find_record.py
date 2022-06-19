def get_csv(filename: str) -> str:
    with open(filename, "r") as f:
        result = f.read()
    return result


def split_row(csv_data: str) -> list[str]:
    return csv_data.split("\n")


rows = split_row(get_csv("dummy.csv"))

result = "Not Found"
for row in rows:
    name = row.split(",")[0]
    if name == "嘘 月太郎":
        result = row
        break

print(result)
