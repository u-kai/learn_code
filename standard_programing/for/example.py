filename = "./名簿.csv"
with open(filename,"r") as f:
    # ファイルの値を一つの文字列として読み込み
    filedata = f.read()
# 改行(\n)で文字列を分ける(1行ずつ配列に格納する)
lines = filedata.split("\n")

names = []
genders = []

# 1行ずつ値を取り出す
for i,line in enumerate(lines):
    if i==0:
        continue
    # "取り出した1行をさらに,(カンマ)で分ける"
    name_and_gender = line.split(",")

    # 今回のファイルは名前,性別なので最初の要素をnamesリストに,次の要素をgendersリストに一時格納
    names.append(name_and_gender[0])
    genders.append(name_and_gender[1])


for i,name in enumerate(names):
    # namesを一つづつ取り出して処理を行う．
    gender = genders[i]
    if gender == "女":
        print(name + "さん")
        continue
    if gender == "男":
        print(name + "くん")
