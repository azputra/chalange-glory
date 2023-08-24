# Jawaban Case Study Test
a. dari situasi di atas, di awal assignment, apa saja yang akan kamu lakukan? informasi apa yang kamu perlu tahu
sebelum memulai mengerjakan task? 
1. Membaca dokumentasi 3rd party library
2. Memastikan bahwa 3rd party library yang akan digunakan sesuai dengan kebutuhan proyek 
3. Mengidentifikasi potensi bugs yang akan muncul / membuat validasi
4. Setelah memahami library rencana selanjutnya adalah implementasi & testing

b. jika ternyata di tengah pengerjaan kamu kesulitan dalam melakukan integrasi 3rd party library dan tidak yakin
bisa selesai di hari deadline, hal tersebut karena ada module dalam existing project yang perlu dimodifikasi
juga, jelaskan bagaimana kamu menginformasikan kepada tim (via email / message) dan siapa saja yang kamu
kontak? 
1. Project Manager : Memberitahu PM tentang kendala yang saya hadapi dan meminta bantuan dalam mengevaluasi dampak jadwal proyek akibat keterlambatan ini.
2. Tech Lead / Developer Lain : menanyakan kepada tim untuk saran teknis dalam mengatasi masalah integrasi library dan modifikasi modul eksisting.
ketika menginformasikan kepada tim (via email / message) saya akan menjelaskan situasi secara jujur dan menyeluruh, tentang kendala yang di hadapi, upaya yang sudah di lakukan apa, perkiraan dampak ke project jika melakukannya, dan memberitahu solusi yang saya dapat sejauh ini.

# Setup Local Environment
1. buat file .env sejajar dengan folder public, src, .gitignore dll.
2. isi REACT_APP_URL_BE = {url be lengkap sampai /api/v2}
3. pada project directory `npm install`
4. pada project directory `npm run start`

# Web Published
`frontend-test-rolling-glory.netlify.app`

# Tech Spec
1. ReactJS: karna sudah terbiasa dengan reactJS dan sudah familiar agar mendeliver dengan cepat semua request dari test ini.
2. Axios: untuk melakukan permintaan HTTP dari browser. Ini memudahkan kita untuk berkomunikasi dengan API untuk mengambil atau mengirim data.
3. htmr: untuk melakukan pengubahan kode HTML menjadi element React.
4. Redux: untuk mengelola state management aplikasi secara global.
5. React-helmet: untuk mengatur tag HTML web secara dinamis, manfaatnya untuk SEO dalam mesin pencari google bisa menggunakan tag <title></title> untuk menentukan judul halaman yang akan di tampilkan di search engine.
6. sweetalert2: untuk menampilkan notif message secara mudah dan cepat.

# Implementasi API
1. untuk API `https://recruitment.dev.rollingglory.com/api/v2/gifts/1/wishlist` ketika sudah send api dan mendapatkan return 200 tetapi status isWishlist tidak berubah apa apa, dan sudah di coba di postman juga tidak terjadi perubahan pada data gifts

# Penjelasan jika ada penyesuaian design dan penambahan interaksi
1. penambahan interaksi ketika di scroll down maka akan terload data yang baru / data pada page selanjutnya
2. penambahan button scroll up untuk otomatis scroll ke atas saat user sedang berada di halaman bawah


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
