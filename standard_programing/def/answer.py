#1.回答例
# 引数に男の好み情報も加える

def is_require_women(require_height,require_age,require_holiday,g_name,g_height,g_age,g_holiday):
    if g_height == require_height:
        if g_age == require_age:
            if g_holiday == require_holiday:
                print(g_name + "さん," + "好きだ")

# Aくんの好み異性情報
a_require_height = 160
a_require_age = 26
a_require_holiday = "sunday"

# Zくんの好み異性情報
z_require_height = 160
z_require_age = 22
z_require_holiday = "sunday"

# Bさんの情報
b_name = "B"
b_height = 160
b_age = 22
b_holiday = "sunday"

# Cさんの情報
c_name = "C"
c_height = 150
c_age = 25
c_holiday = "monday"

# Dさんの情報
d_name = "D"
d_height = 160
d_age = 26
d_holiday = "sunday"

#Aさんの判定
is_require_women(require_height=a_require_height,require_age=a_require_age,require_holiday=a_require_holiday,g_name=b_name,g_height=b_height,g_age=b_age,g_holiday=b_holiday)
is_require_women(require_height=a_require_height,require_age=a_require_age,require_holiday=a_require_holiday,g_name=c_name,g_height=c_height,g_age=c_age,g_holiday=c_holiday)
is_require_women(require_height=a_require_height,require_age=a_require_age,require_holiday=a_require_holiday,g_name=d_name,g_height=d_height,g_age=d_age,g_holiday=d_holiday)

#Zさんの判定
is_require_women(require_height=z_require_height,require_age=z_require_age,require_holiday=z_require_holiday,g_name=b_name,g_height=b_height,g_age=b_age,g_holiday=b_holiday)
is_require_women(require_height=z_require_height,require_age=z_require_age,require_holiday=z_require_holiday,g_name=c_name,g_height=c_height,g_age=c_age,g_holiday=c_holiday)
is_require_women(require_height=z_require_height,require_age=z_require_age,require_holiday=z_require_holiday,g_name=d_name,g_height=d_height,g_age=d_age,g_holiday=d_holiday)
#############################################################################################################################################################################
# 2.回答例
# is_require_womenは判定だけの関数にし，告白は別の関数として定義する

# is_require_womenは好きかどうかの判定結果を返す(True->好き　False->好みじゃない)
def is_require_women(require_height,require_age,require_holiday,g_height,g_age,g_holiday):
    if g_height == require_height:
        if g_age == require_age:
            if g_holiday == require_holiday:
                return True
    return False

def say_love(to_name,phrase):
    print(to_name + "さん," +phrase)


#Aさんの判定
if is_require_women(a_require_height,a_require_age,a_require_holiday,b_height,b_age,b_holiday):
    say_love(b_name,"好きだ")
if is_require_women(a_require_height,a_require_age,a_require_holiday,c_height,c_age,c_holiday):
    say_love(c_name,"好きだ")
if is_require_women(a_require_height,a_require_age,a_require_holiday,d_height,d_age,d_holiday):
    say_love(d_name,"好きだ")


#Zさんの判定
if is_require_women(z_require_height,z_require_age,z_require_holiday,b_height,b_age,b_holiday):
    say_love(b_name,"好きでやんす")
if is_require_women(z_require_height,z_require_age,z_require_holiday,c_height,c_age,c_holiday):
    say_love(c_name,"好きでやんす")
if is_require_women(z_require_height,z_require_age,z_require_holiday,d_height,d_age,d_holiday):
    say_love(d_name,"好きでやんす")

# 利点:関数を分けることで

# 柔軟性が上がる : 
# 関数を分けたことで，好みか判定した後に行う行動を柔軟に決定できる => 適応範囲が広がる(判定した後に告白せず,デートに誘うパターンにもis_require_womenを使える)
# 上と同じで，say_loveの適応範囲も広い．好みか判定した後だけに使えるだけではなく，付き合っている人に対して使ってもいいし，家族に対して使ってもいい．
# 関数を分けなければ，好みであれば絶対に告白しなければいけない => デートに誘うパターンを,好みか判定する処理から書かなければいけなくなる

# 役割がハッキリして可読性が上がる : 
# 関数を分けたことで，関数の役割がハッキリする．
# is_require_womenと言う関数名だけ見ると，欲している女性かどうか?という意味なのに，
# 告白までしているので，関数の意味と関数自体の処理がマッチしておらず，開発者が多い時や引き継ぎの時に誤解を生む


# まとめ
#　関数は役割ごとに小さく分けること
# そうすることで関数の柔軟性が上がり，いろんなところ(パターン)で使いまわしやすくなる!
# 名前と役割は一致していること．上のようにis_require_women(好みの女性か？)と言う関数に告白という別のことまで入れないこと．
