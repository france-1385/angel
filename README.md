# あなたに似合う フランス手芸の世界診断

8つの質問から、あなたに似合うフランス手芸の世界を案内する、HTML/CSS/JavaScriptだけで動く静的Webアプリです。ログインや外部APIは必要ありません。

## 公開方法（GitHub Pages）

1. このフォルダをGitHubのリポジトリにアップロードします。
2. GitHubの **Settings → Pages** を開きます。
3. **Build and deployment** で `Deploy from a branch` を選び、`main` ブランチの `/(root)` を指定して保存します。
4. 表示されたURLを開くと公開版を確認できます。

## 写真の差し替え

`assets/` 内の画像を同名で置き換えるだけで変更できます。

- `header.jpg`: ヘッダー画像
- `monogram.jpg`: パリのモダンモノグラム
- `flower-atelier.jpg`: 花園のアトリエ
- `queen.jpg`: 王妃のサロン
- `south-france.jpg`: 南フランスのひだまり

画像を別名にする場合は、`index.html` と `script.js` の該当する `assets/...` パスも同じ名前に変更してください。公開前には、画像の利用許諾・著作権をご確認ください。

## 公開前チェック

- すべての診断結果が表示されるか
- CTAリンク先が正しいか
- スマートフォン幅で読みやすいか
- 使用画像の権利が確認できているか
