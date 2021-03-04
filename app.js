const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => {
res.send('Dead, not Decayed');
});

app.listen(port , () => console.log(`The app listening on port ${port}!`));
