const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const port = process.env.PORT;

//use middleware
app.use(cors());
app.use(express.json());

//routes
app.use(require('./routes/route'));

//db connection
const conn = require('./db/connection');

conn.then((db) => {
    if (!db) return process.exit(1);

    app.listen(port, () => {
        console.log(`Server is running on port: http:localhost:${port}`);
    });

    app.on('error', (err) =>
        console.log(`Failed to connect with HTTP Server: ${err}`)
    );
    //error in mongocb connection
}).catch((error) => {
    console.log(`Connection Failed Error ${error}`);
});
