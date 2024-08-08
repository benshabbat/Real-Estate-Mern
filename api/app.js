import express from 'express';
import authRoute from "./routes/auth.route"
import postRoute from "./routes/post.route"
const app = express();

app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.listen(8800,() => {console.log("Server listening on")});
