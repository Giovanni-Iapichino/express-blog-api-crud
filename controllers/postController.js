let { posts } = require("../data/db");

//# INDEX

const index = (req, res) => {
  let filteredPosts = posts;

  if (req.query.tags) {
    filteredPosts = posts.filter((post) => post.tags.includes(req.query.tags));
  }
  res.json(filteredPosts);
};

//# SHOW

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  if (!post) {
    res.status(404);

    return res.json({
      message: "Post non trovato",
      error: "Not found",
      status: 404,
    });
  }
  res.json({
    message: "dettagli del post " + id,
    post,
  });
};

//# CREATE

const store = (req, res) => {
  const { title, content, image, tags } = req.body;
  let maxId = 0;
  for (const post of posts) {
    if (post.id > maxId) maxId = post.id;
  }
  const postId = maxId + 1;
  const newPost = { id: postId, title, content, image, tags };
  posts.push(newPost);

  res.status(201);
  res.json(newPost);
};

//# UPDATE

const update = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);

  if (!post) {
    res.status(404);

    return res.json({
      message: "Post non trovato",
      error: "Not found",
      status: 404,
    });
  }

  const { title, content, image, tags } = req.body;

  const updatedPost = { id: id, title, content, image, tags };
  posts.splice(posts.indexOf(post), 1, updatedPost);

  res.json(updatedPost);
};

const modify = (req, res) => {
  res.json({ message: "modifica parziale del post" });
};

//# DELETE

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    res.status(404);

    return res.json({
      message: "Post non trovato",
      error: "Not found",
      status: 404,
    });
  }
  posts.splice(posts.indexOf(post), 1);
  console.log("Lista aggiornata dei post: ", posts);
  res.sendStatus(204);
};

module.exports = { index, show, store, update, modify, destroy };
