const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5000;

const app = http.createServer((req, res) => {


    switch (req.url) {

        case "/img/img1.png":
            fs.readFile(path.join(__dirname, "/img/img1.png"), (err, ele) =>
                err ? console.log(err) : res.end(ele)
            );
            break;
        case "/img/img2.jpg":
            fs.readFile(path.join(__dirname, "/img/img2.jpg"), (err, ele) =>
                err ? console.log(err) : res.end(ele)
            );
            break;
        case "/img/img3.jpg":
            fs.readFile(path.join(__dirname, "/img/img3.jpg"), (err, ele) =>
                err ? console.log(err) : res.end(ele)
            );
            break;
        case "/img/img4.jpg":
            fs.readFile(path.join(__dirname, "/img/img4.jpg"), (err, ele) =>
                err ? console.log(err) : res.end(ele)
            );
            break;
        case "/img/img5.jpg":
            fs.readFile(path.join(__dirname, "/img/img5.jpg"), (err, ele) =>
                err ? console.log(err) : res.end(ele)
            );
            break;


        case "/":
            const homepath = path.join(__dirname, 'pages/index.html')
            fs.readFile(homepath, (err, ele) => {
                err ? console.log(err) : res.end(ele)
            })
            break;

        case "/about":
            fs.readFile('pages/about.html', (err, ele) => {
                err ? console.log(err) : res.end(ele)
            })
            break;

        case "/contact":
            fs.readFile('pages/contact.html', (err, ele) => {
                err ? console.log(err) : res.end(ele)
            })
            break;

        case "/news":
            fs.readFile('pages/news.html', (err, ele) => {
                err ? console.log(err) : res.end(ele)
            })
            break;

        case "/product":
            fs.readFile('pages/product.html', (err, ele) => {
                err ? console.log(err) : res.end(ele)
            })
            break;

        default:
            res.end("Page Not Found")
    }
})

app.listen(PORT, () => console.log(`Server Connected Port Number http://localhost:${PORT}`))