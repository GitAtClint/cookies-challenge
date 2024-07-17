//after creating another react app and doing a ton of stuff on it I was getting annoyed
//since this lesson is server side learning I just made this instead on the server
//will keep the other app for future if needed though :)

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const port = 8080;

app.use(cookieParser());

//====================home=========================
app.get('/', (req, res) => res.send('Hello World!'))

//====================login=======================
//app.get('./login', function (req, res) {
app.get('/login', (req, res) => {
    // define cookie attributes

    //const  name = getData(req.session.name);
    const cookieName = req.cookies.name;
    const queryName = req.query.name;
    if(queryName) {
        var opts = {
            maxAge: 900000,
            httpOnly: true,
            sameSite: 'strict',
        };
        res.cookie('name', queryName, opts);
        res.send(`${queryName} we got your details bro! We are going to send this shizz to errrr ad agency and malware site to max our profits and flood you with ads! ${name} you messed up BRUH!`);
    } else if (cookieName) {
        res.send(`${cookieName} we already got your info dog!!!! BAHAHAHA! *cough* *mmm* *cough* HAHA!`)
    }
    else {
        res.send(`
            <form method="GET" action="/login">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <button type="submit">Login</button>
            </form>
        `);
    }
});

//=======================hello==================================
app.get('/hello', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`Welcome ${name}!`);
    } else {
        res.send("Sowwy we can't help the nameless chumps and chumpettes");
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))