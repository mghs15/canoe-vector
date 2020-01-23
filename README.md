# 架空地図をベクトルタイルで公開する方法
架空の地図（出典:『大帝都市詳図』拾参號地・筆）をベクトルタイルに変換して配信する実験。

※このレポジトリにおいて、架空地図と現実世界とのリンクについては考慮を行っておりません。当レポジトリ内では、架空地図の内容と実在の人物、地域、団体とは一切の関係はございません。

## 架空地図配信ページ
https://mghs15.github.io/canoe-vector/

## 元データの準備
[地理院地図](https://maps.gsi.go.jp/)の作図機能およびQGISを使って、『大帝都市詳図』素図からベクトルデータを作成した。

のちのち[Mapbox Vector Tile](https://github.com/mapbox/vector-tile-spec)に変換することを考え、当初はMapbox Vector Tileのレイヤに相当する架空データごとに１つのGeoJSONファイルに分離して作成したが、
データ作成・管理上、属性値の組み合わせ（例えば、道路種別＋階層レベル）ごとにGeoJSONを作成するようにしている。。

基本的に<a href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment">地理院地図Vector</a>のデータ構造を参考にしつつ、設計している。

実際のデータの内容は、[DATA-SPEC.md](https://github.com/mghs15/canoe-vector/blob/master/DATA-SPEC.md)で検討を行う。

## Mapbox Vector Tile作成工程
まず、mbtilesを入れておくディレクトリを作成する。
```
mkdir -p mbtiles
```

[Tippecanoe](https://github.com/mapbox/tippecanoe)を用いてそれぞれのGeoJSONをmbtilesに変換する。

Tippecanoeでは、データのSimplificationが行われる。特にポイントデータは、大幅に間引きされるので、`--drop-rate=1`を指定して、間引きが行われないようにする。

また、`tippecanoe -o building.mbtiles -l building building.geojson`のように、`-l`オプションでレイヤ名を指定することもできる（指定しなければ、ファイル名から取得される）。

なお、`-f`オプションを指定すると、既存のファイルを上書きする。

```
tippecanoe -f -l building -o mbtiles/building.mbtiles building.geojson
tippecanoe -f -l elevation -o mbtiles/elevation.mbtiles elevation.geojson
tippecanoe -f -l land -o mbtiles/land.mbtiles land.geojson
tippecanoe -f -l railway -o mbtiles/railway.mbtiles railway.geojson
tippecanoe -f -l road -o mbtiles/road.mbtiles road.geojson
tippecanoe -f -l icon -o mbtiles/icon.mbtiles icon.geojson --drop-rate=1
tippecanoe -f -l text -o mbtiles/text.mbtiles text.geojson --drop-rate=1
```

それぞれのmbtilesを一つ（v.mbtiles）にまとめる。

```
tile-join -f -o v.mbtiles mbtiles/building.mbtiles mbtiles/elevation.mbtiles mbtiles/land.mbtiles mbtiles/icon.mbtiles mbtiles/land.mbtiles mbtiles/road.mbtiles mbtiles/river.mbtiles mbtiles/text.mbtiles
```

XYZのタイル構造に展開（vtileというフォルダに格納される。）

```
tile-join -f -e vtiles v.mbtiles --no-tile-compression
```

## 配信
[Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js)を利用して配信。地図記号の表示については、地理院地図VectorのSpriteファイルを利用。

## 感想
* ポイントデータ以外、Simplificationの影響は考えていない（ベクトル化したデータがもともと粗いため）。
* 精度を上げていった場合、ラインやポリゴンデータについてもSimplificationを考慮する必要があるだろう。
* すべての地物を作成したすべてのズームレベルのタイルに入れているが、後々、地物ごとに入れるべきズームレベルを制御する必要があるだろう。[やり方](https://github.com/mapbox/tippecanoe#zoom-levels)は`-zg -Z4`というように、z:maxzoom～Z:minzoomという形で指定する）。
* 属性値の指定が面倒くさい（特に地理院地図の作図機能を利用する場合）ことを考えると、描画を分けたい地物については、どんどん別レイヤにしてしまったほうが良いかもしれない。
* より情報量の多い地図を作成するには、架空データの属性値についても整理しなくてならない。（例：道路の幅員、高架など）
* もしも、複数のGeoJSONをひとつのレイヤに入れる場合、それぞれのGeoJSONから別のmbtilesを作るのではなく、ひとつのmbtilesにまとめた方が処理が速い。
```
#属性値（種別・階層）ごとに作成したGeoJSONを"road.mbtiles"に"road"レイヤとして格納する。
tippecanoe -f -l road -o mbtiles/road.mbtiles \
  road-highway.geojson \
  road-highway-bridge.geojson \
  road-primary.geojson \
  road-primary-bridge.geojson \
  road-secondary.geojson \
  road-secondary-bridge.geojson \
  road-narrow.geojson
```

## 備考
TippecanoeはMacまたはLinux環境でないと動きません。しかしながら、Windows10にはWSL（Windows Subsystem for Linux）という、WindowsでLinuxコマンドを利用できるサービスがあります。これを用いることで、Windows10でTippecanoeを扱えるようになりました。ベクトルタイルの作成が非常にやりやすくなったといえます。WSLをオンにして、お好きなUbuntuをMicrosoft Storeから導入した後は、TippecanoeのレポジトリのUbuntu用の説明に従えばOKです。

## 参考文献
* 地理院地図<br>
https://maps.gsi.go.jp/
* 地理院地図Vector（仮称）提供実験のソース<br>
https://github.com/gsi-cyberjapan/gsimaps-vector-experiment
* mapbox/tippecanoe<br>
https://github.com/mapbox/tippecanoe
* mapbox/vector-tile-spec<br>
https://github.com/mapbox/vector-tile-spec
* mapbox/mapbox-gl-js<br>
https://github.com/mapbox/mapbox-gl-js
* Qiita- tippecanoe の tile-join の６つの地道な使い方<br>
https://qiita.com/hfu/items/144bb4384226e7c30000

## 謝辞
『大帝都市詳図』素図の提供・利用許諾をいただいた拾参號地氏に感謝申し上げます。
