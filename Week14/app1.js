const express = require('express');

const app = express();
app.set('port',3000);

app.use((req,res,next) => {
    res.status(200).send(`<h1>Hi ! Welcome </h1>
        <h1>Hello World !!!</h1>`);
});

app.listen(app.get('port'),()=>{
    console.log('Server listening on port 3000');
});

