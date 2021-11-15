# Next.jsではじめるSupabase

[インプレスR&D](https://www.impressrd.jp/)から出版されている書籍「[Next.jsではじめるSupabase](https://nextpublishing.jp/book/14025.html)」のサンプルコードリポジトリです。  
本書は、[技術書典11](https://techbookfest.org/)で頒布した書籍「[Next.jsではじめるSupabase](https://techbookfest.org/product/5379695388393472?productVariantID=4808144628744192)」の商業化版です。  
※技術書典版のサンプルコードは[こちら](https://github.com/NiXieePlus/supabase-manga-list-sample)です。

<img src="https://m.media-amazon.com/images/I/512rpWZAnOL._SY346_.jpg" alt="表紙" width=300>

購入はこちらから

- [Amazon](https://www.amazon.co.jp/gp/product/B09LM3DCY3/ref=as_li_tf_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B09LM3DCY3&linkCode=as2&tag=impressrd-1-22)
- [楽天ブックス](https://books.rakuten.co.jp/rk/17e1a7ba2d253ec5b9d5c2e611ac9987/?l-id=search-c-item-text-01)
- [紀伊國屋書店](https://www.kinokuniya.co.jp/f/dsg-08-EK-1086812)
- [Google Play](https://play.google.com/store/books/details/Next_js%E3%81%A7%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BSupabase?id=aqpNEAAAQBAJ)
- [honto](https://honto.jp/netstore/pd-book_31333987.html)

## 作成するサンプルアプリ

実際に本書で作成するサンプルアプリは以下のURLで公開しています。

[https://supabase-ird.nixiee.plus](https://supabase-ird.nixiee.plus)

### アプリの概要

所有している漫画を一覧できるWebアプリです。
[楽天ブックス書籍検索API](https://webservice.rakuten.co.jp/api/booksbooksearch/)や[openBD](https://openbd.jp/)を使用し、簡単に書籍を登録できます。

### サンプルアプリの使い方

- アカウントを作成し、ログイン
  - メールアドレス、マジックリンク、GitHubアカウントによるログインをサポート
- 「ADD NEW」をクリックし、追加した漫画のタイトル・著者を入力して「Add」
- 登録した漫画をクリックした後、「ADD NEW」をクリックし、各巻の情報を登録
  - "Volume"に巻数、"ISBN"にISBN(国際的な書籍の識別子)を入力
  - ISBNは漫画タイトルにより検索可能
  - "Possession"にチェックを入れると所持している状態になり、サムネイルがカラー表示されます
- ログイン後に右上のユーザー名部分をクリックすることで、アカウント情報(ユーザー名・アバター画像)を変更できます

## 使用している主なパッケージ

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Supabase](https://supabase.io/)
- [Supabase UI](https://ui.supabase.io/)
- [Headless UI](https://headlessui.dev/)

## タグについて

本書では、開発段階のサンプルコードを実行できるように、書籍の節ごとにタグを付与しています。
[Releasesページ](https://github.com/NiXieePlus/supabase-book-ird-sample/releases)からご確認下さい。

## 本書に関するご意見・ご感想・ご指摘

以下のいずれかの方法でご連絡いただけると幸いです。

- Twitter
  - 著者へメンション([りーべ](https://twitter.com/MagicalLiebe)・[ぽぬう](https://twitter.com/ponu77))
  - ハッシュタグ [#supabase_ird](https://twitter.com/intent/tweet?hashtags=supabase_ird)を付けてツイート
- GitHub
  - Issuesに投稿

## 正誤表

本書に関する修正についてもこちらのリポジトリにて掲載いたします。

正誤表は[こちら](book/errata.md)
