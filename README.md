# toast-vue3

## 概要

Vue3 で Todo アプリを作成してみる。

いつもお世話になっています。参考: <https://github.com/puku0x/todo-vue>

使用技術・技術選定理由

- [Vue3](https://v3.vuejs.org/)
  - 小さい PJ ならこれでいいかな
  - 中規模以上ならおすすめできない
  - 対応しているライブラリがあるかどうかの精査は必要
- [Vuex](https://next.vuex.vuejs.org/)
  - Vue との相性を考えたときには, CompositionAPI で provide/inject を使うか, Vuex の 2 択
  - シングルトンの維持や設計などを考えると Vuex でいいかな
  - TS との相性が悪いので facade 層は必須
- [VueRouter](https://next.router.vuejs.org/)
  - Vue で routing を考えるなら一択
- [VueToastification](https://github.com/Maronato/vue-toastification/tree/next)
  - toast の実装はライブラリに任せたい
  - Vue3 に対応しているライブラリはこれくらいしかなかった
- [bulma](https://bulma.io/)
  - frontend の framework に依存していない css framework を使ってみたかった
  - 使い勝手良さそうだったので選んだ
  - ここらへんのこだわりは特にない

## セットアップ

```shell
npm install
```

## 開発

```shell
npm run start
```
