const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
res.send('Dead, not Decayed');
});

app.get('/movie', (req, res) => {
    res.set('X-Fullstack', '4lyf')
    res.status(418);
    res.send('I prefer Books')
})

app.listen(port , () => console.log(`The app listening on port ${port}!`));

