let { posts } = require("../data/db");

//# INDEX

const index = (req, res) => {
  res.json({
    message: "lista dei post",
    data: { posts },
  });
};

//# SHOW

const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((currentPost) => currentPost.id === id);
  res.json({
    message: "dettagli del post" + id,
    data: post,
  });
};

//# CREATE

const create = (req, res) => {
  res.json({ message: "creazione del post" });
};

//# UPDATE

const update = (req, res) => {
  res.json({ message: "modifica integrale del post" });
};

const modify = (req, res) => {
  res.json({ message: "modifica parziale del post" });
};

//# DELETE

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((post) => id !== post.id);
  res.json({
    message: "eliminazione del post",
    data: post,
    status: 204,
  });
  console.log(post);
};

module.exports = { index, show, create, update, modify, destroy };
