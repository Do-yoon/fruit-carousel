# 株式会社マカルーデジタル　フロントエンドエンジニア　採用試験課題
제시된 UI 중 2번째 항목인 [Colourful Fruits. Product Carousel Animation](https://www.figma.com/community/file/1251466450658140709)을 구현했습니다. カルーセルにはライブラリを使いませんでした。アニメーション具現のため、`react-transition-group`ライブラリを使いました。

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

## 具現した機能の中でFigmaのprototypeにないこと
* fruitylips logoをクリックすると、`/`にリダイレクトします。
* 上段メニューバーエリアをクリックすると、その果物のテーマに変わります。
* カルーセルの矢印をクリックすると、次または以前のテーマに変わります。