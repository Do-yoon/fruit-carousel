# 株式会社マカルーデジタル　フロントエンドエンジニア　採用試験課題
提示されたUIのうち、2つ目の項目である[Colourful Fruits. Product Carousel Animation](https://www.figma.com/community/file/1251466450658140709)を具現化しました。カルーセルにはライブラリを使用しませんでした。アニメーション具現のため、`react-transition-group`ライブラリを使用しました。

## 実行方法
### 1. dependenciesを設置
```
npm config set legacy-peer-deps true
npm install
npm run dev
```
### 2. localhostに接続
http://localhost:3000/ に接続します。

## 開発環境
* npm 9.6.2
* node 20.11.1

## 具現した機能のうち、Figmaのprototypeにないもの
* fruitylips logoをクリックすると、`/`にリダイレクトする機能
* 上段メニューバーエリアをクリックすると、その果物のテーマに変化する機能
* カルーセルの矢印をクリックすると、次または以前の果物のテーマにする機能