# ね，うし，とら，う，たつ，み，うま，羊，猿，とり，犬，い

# pc<-2023 -> うさぎ
# 12サイクル
# 干支を知りたい年を打ち込む
# 計算した結果を出力する

etos = [
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "🐍",
    "午",
    "未",
    "申",
    "酉",
    "戌",
    "亥",
]
year = int(input())
while year < 1900:
    print("1900以上の値を入れてください")
    year = int(input())


amari = (year - 1900) % 12
print(etos[amari])
