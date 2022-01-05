// Link     ->> https://webpack.js.org/concepts

===Langkah Instalasi===
1. Buat folder aplikasi dan masuk ke folder tersebut
> mkdir reactApp
> cd reactApp
2. Generate file “package.json”
> npm init -y
3. Install React dan React Dom
> npm install react --save
> npm install react-dom --save

4. Install webpack dan semua pendukungnya
> npm install webpack --save-dev
> npm install webpack-dev-server --save-dev
> npm install webpack-cli --save-dev

5. Install babel dan semua pendukungnya
> npm install @babel/core --save-dev
> npm install @babel/node --save-dev
> npm install @babel/preset-env --save-dev
> npm install @babel/preset-react --save-dev
> npm install babel-loader --save-dev

6. Install path dan webpack plugin
> npm install path --save-dev
> npm install html-webpack-plugin --save-dev

7. Buat folder src dan isi dengan file-file berikut
> mkdir src
> type nul > index.html
> type nul > index.js

8. Buat file webpack.config.js dan isikan dengan     kode di samping
> type nul > webpack.config.js

10. Buka file index.html dan isikan dengan kode    seperti di samping

11. Buka file src/index.js dan isikan dengan kode

12. Buat file .babelrc dan isikan dengan kode      seperti di bawah
> type nul > .babelrc

13. Lakukan kompilasi dengan webpack
> npm run webpack


14. Jalankan server dan buka aplikasi di browser
> npm start


===proses melakukan .gitignore===
> buat file .gitignore
tambahkan script --> node_modules (penamaan sesuai nama folder)  // dengan catatan ini berlaku utk satu subfolder
                 --> **/node_modules (denganncatatan kalau di folder yang kita punya ada beberapa subfolder yang memiliki node_modules)