# 架空地図をベクトルタイルで公開する方法
架空の地図（出典:『大帝都市詳図』拾参號地・筆）をベクトルタイルに変換して配信する実験のデータ詳細。

※このレポジトリにおいて、架空地図と現実世界とのリンクについては考慮を行っておりません。当レポジトリ内では、架空地図の内容と実在の人物、地域、団体とは一切の関係はございません。

※以下のデータは検討中のものです。属性値の設定がないものでも、何かしらの属性値（当該属性値は""またはNULL）が入っていることがあります。

## 建物・市街地データ

### レイヤ名
`building`

### 属性値

`class` *string*

<table>
  <tr>
    <td>"a"</td>
    <td>市街地</td>
  </tr>
  <tr>
    <td>"b"</td>
    <td>堅ろう建物</td>
  </tr>
  <tr>
    <td>"c"</td>
    <td>普通建物</td>
  </tr>
</table>

## 鉄道データ

### レイヤ名
`railway`

### 属性値

`class` *number*

<table>
  <tr>
    <td>1</td>
    <td>官営</td>
  </tr>
  <tr>
    <td>2</td>
    <td>民営</td>
  </tr>
</table>

`railState` *number*

<table>
  <tr>
    <td>0</td>
    <td>通常部</td>
  </tr>
  <tr>
    <td>1</td>
    <td>高架・橋梁</td>
  </tr>
</table>

`snglDbl *number*

※官営鉄道（class=1）のデータのみ

<table>
  <tr>
    <td>0</td>
    <td>単線</td>
  </tr>
  <tr>
    <td>1</td>
    <td>複線</td>
  </tr>
</table>

## 道路データ

### レイヤ名
`road`

### 属性値

`class` *number*

<table>
  <tr>
    <td>0</td>
    <td>国道</td>
  </tr>
  <tr>
    <td>1</td>
    <td>主要道</td>
  </tr>
  <tr>
    <td>2</td>
    <td>準主要道</td>
  </tr>
  <tr>
    <td>3</td>
    <td>その他の道路</td>
  </tr>
  <tr>
    <td>1000</td>
    <td>海上国道</td>
  </tr>
</table>

`lvOrder` *number*

<table>
  <tr>
    <td>0</td>
    <td>通常部</td>
  </tr>
  <tr>
    <td>1</td>
    <td>高架・橋梁</td>
  </tr>
</table>

## 陸地データ

### レイヤ名
`land`

### 属性値

設定なし

## 水部（海上を除く）データ

### レイヤ名
`waterarea`

### 属性値

設定なし

## 森林データ

### レイヤ名
`landuse-forest`

### 属性値

設定なし

## 荒地（草地・湿地を含む）データ

### レイヤ名
`landuse-grass`

### 属性値

設定なし

## 砂礫地データ

### レイヤ名
`landuse-sand`

### 属性値

`class` *number* （運用予定）

<table>
  <tr>
    <td>0</td>
    <td>陸上（砂礫地）</td>
  </tr>
  <tr>
    <td>1</td>
    <td>海上（干潟）</td>
  </tr>
</table>

## 行政界データ

### レイヤ名
`boundary`

### 属性値

設定なし

## 等高線データ

### レイヤ名
`elevation`

### 属性値

`alti` *number*

<table>
  <tr>
    <td>number</td>
    <td>標高値を数値として格納</td>
  </tr>
</table>


## 記号データ

### レイヤ名
`icon`

### 属性値

`name` *string*

<table>
  <tr>
    <td>string</td>
    <td>記号が示す施設名等を文字列として格納</td>
  </tr>
</table>

`kana` *string*

<table>
  <tr>
    <td>string</td>
    <td>name属性のひらがな表記</td>
  </tr>
</table>

`eng` *string*

<table>
  <tr>
    <td>string</td>
    <td>name属性の英語表記</td>
  </tr>
</table>


`namevisible` *string*

※本来はbooleanとすべきだが、ファイルの仕様上、文字列として扱う。

<table>
  <tr>
    <td>string</td>
    <td>name属性を表示するかどうか。表示しない場合はfalse。</td>
  </tr>
</table>

`ftCode` *string*

<table>
  <tr><td>"1402"</td><td>市役所・区役所</td></tr>
  <tr><td>"3201"</td><td>官公署</td></tr>
  <tr><td>"3202"</td><td>裁判所</td></tr>
  <tr><td>"3211"</td><td>交番</td></tr>
  <tr><td>"3214"</td><td>小学校</td></tr>
  <tr><td>"3213"</td><td>中学校</td></tr>
  <tr><td>"3218"</td><td>郵便局</td></tr>
  <tr><td>"3221"</td><td>灯台</td></tr>
  <tr><td>"3231"</td><td>神社</td></tr>
  <tr><td>"3232"</td><td>寺院</td></tr>
  <tr><td>"3242"</td><td>消防署</td></tr>
  <tr><td>"3243"</td><td>病院</td></tr>
  <tr><td>"4104"</td><td>記念碑</td></tr>
  <tr><td>"6311"</td><td>田</td></tr>
  <tr><td>"6312"</td><td>畑</td></tr>
  <tr><td>"6314"</td><td>果樹園</td></tr>
  <tr><td>"6321"</td><td>広葉樹林</td></tr>
  <tr><td>"6327"</td><td>荒地</td></tr>
  <tr><td>"6341"</td><td>史跡・名勝・天然記念物</td></tr>
  <tr><td>"6361"</td><td>港湾</td></tr>
  <tr><td>"6362"</td><td>漁港</td></tr>
  <tr><td>"7102"</td><td>三角点</td></tr>
  <tr><td>"7103"</td><td>水準点</td></tr>
  <tr><td>"7201"</td><td>標高点（測点）</td></tr>
  <tr><td>"8103"</td><td>発電所等</td></tr>
  <tr><td>"8105"</td><td>電波塔</td></tr>
</table>

`alti` *number*

<table>
  <tr>
    <td>number</td>
    <td>標高値を数値として格納</td>
  </tr>
</table>

`zokusei` *string*

<table>
  <tr>
    <td>string</td>
    <td>データ管理用。ftCode相当の情報を日本語で管理</td>
  </tr>
</table>


## 注記データ

### レイヤ名
`text`

### 属性値

`class` *number*

<table>
  <tr>
    <td>0</td>
    <td>自然地名</td>
  </tr>
  <tr>
    <td>1</td>
    <td>住居地名</td>
  </tr>
  <tr>
    <td>2</td>
    <td>重要施設名</td>
  </tr>
</table>

`knj` *string*

<table>
  <tr>
    <td>string</td>
    <td>注記の漢字表記を文字列として格納</td>
  </tr>
</table>

`kana` *string*

<table>
  <tr>
    <td>string</td>
    <td>注記のひらがな表記を文字列として格納<</td>
  </tr>
</table>



