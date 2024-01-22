# フォーマットガイド

このリポジトリは、以下の記事を参考にprettier eslint を導入しました。

https://dev.to/tao/adding-eslint-and-prettier-to-nuxt-3-2023-5bg

# コーディングガイドライン

## サイトの breakpoint

- sm(スマホサイズ) ~480px
- md(ミドルサイズ) ~768px
- lg(タブレットサイズ) ~1000px
- xl(ラージサイズ) ~1200px

1200px~をデフォルトとする。

## CSS カスタムプロパティ

できるだけマジックナンバーを減らしてデザインの共通化にに努めたい。
異なるデザインでも同様の意図で同様の値を取る場合は、カスタムプロパティに登録することを検討されたし。

## Nuxt プロジェクトにお約束

文法や規則上守らないとエラーになるわけではないが、チーム内でのお約束があるので記載しています。

### pages フォルダ

- パスはフォルダを分けて管理する

/about に該当する vue ファイルは、pages/about/index.vue に存在するべきである。

- クラス名は page-root に統一する

pages フォルダ内の vue ファイルは、template タグ直下のタグに page-root というクラス名を命名する。

### components フォルダ

- ファイル名はアッパーキャメルケース
- クラス名はケバブケース

template タグ直下のタグにファイル名のケバブケースをクラス名にする。

PrimaryCard.vue なら、クラス名は primary-card とする。

- コンポーネントに margin を持たせない

### ブランチ管理

- 開発はmainからbranchを切って行う
- mainに直接pushはしない
- 本番環境に関してはrelease-branchを使う
- mainの状態を反映させるときにはmainからreleaseにPRを出す

### その他

- inline css は使用しない
- マジックナンバーを極力避ける
- 単一ファイル内でもカスタムプロパティの定義をする
