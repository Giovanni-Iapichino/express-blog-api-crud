const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const postsRouter = require("./routers/posts");
const postNotFound = require("./middlewares/notFound");
const postErrorsHandler = require("./middlewares/errorsHandler");

const { posts } = require("../express-blog-api-crud/data/db");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.static("public"));
app.use(express.json());

app.use("/posts", postsRouter);
app.use(postNotFound);
app.use(postErrorsHandler);

app.listen(port, () => {
  console.log(`Server attivo su http://localhost: ` + port);
});
