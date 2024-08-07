import express from 'express';

const app = express();
console.log("first")
app.listen(8800,() => {console.log("Server listening on")});
