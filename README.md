# toml2json

TomlファイルをJSONファイルに変換します。

設定ファイルがJSONしかなくてコメントも残せないとお嘆きの方、変換処理は簡単に書けるのでお試しください。
デプロイスクリプトなどに織り交ぜると良いのではないでしょうか。

## Setup

```
$ git clone https://github.com/Nagatani/toml2json.git
$ cd toml2json
$ npm install
```

## Usage

```
$ #node index.js [input toml file path] [output json file path]
$ node index.js sample.toml output.json
```



sample.toml は、 https://github.com/toml-lang/toml/blob/master/tests/example.toml よりお借りしてます。


## LICENSE
WTFPL
