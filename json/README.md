# jsonファイル
このディレクトリ内のjsonファイルについて

## 概要
このディレクトリは以下のjsonファイルを含む
- [html_tags.json](./html_tags.json)

### html_tags.json

```json
[
    {
        "name": "名前",
        "tag": "タグ",
        "meaning": "タグの意味"
        "type": "要素の種類",
        "category": [カテゴリの配列],
        "available_contexts": [利用できるコンテキストの配列],
        "content_model": [コンテンツモデルの配列],
        "end_tag": "終了タグがあるかないか",
        "attributes": [属性の配列],
    },
    {
        "name": String,
        "tag": String,
        "meaning": String,
        "type": String,
        "category": Array,
        "available_contexts": Array,
        "content_model": Array,
        "end_tag": Boolean,
        "attributes": Array,
    },
    {
        "name": "html",
        "tag": "<html>",
        "meaning": "HTML文書のルートであることを示す",
        "type": "document",
        "category": [null],
        "available_contexts": [null],
        "content_model": ["head", "body"],
        "end_tag": true,
        "attributes": [lang],
    },
    {
        ...
        ...
    },
    ...
    ...
]
```

できるなら属性も付けたい。

#### コンテンツモデル
コンテンツがその要素の子や子孫として含めなければいけないもの。<br>
カテゴリはコンテンツモデルを定義するときに使う。
