const express = require("express");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");
const postNotFound = require("./middlewares/notFound");

const { posts } = require("../express-blog-api-crud/data/db");

app.use(express.static("public"));
app.use(express.json());
app.use(postNotFound);

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server attivo su http://localhost: ` + port);
});
