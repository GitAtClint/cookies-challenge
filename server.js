import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 8080;

app.use(cookieParser());

app.get('/login', (req, res) => {
    const name = req.query.name;
    if(name) {
        res.cookie('name', name, {maxAge: 900000, httpOnly: true});
        res.send(`Cookie set for ${name}`);
    } else {
        res.send('Please provide name');
    }
});

app.get('/hello', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`Welcome ${name}!`);
    } else {
        res.send('No name cookie found. Please login first.');
    }
});
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))