const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//# INDEX

router.get("/", postController.index);

//# SHOW

router.get("/:id", postController.show);

//# CREATE

router.post("/", postController.create);

//# UPDATE

router.put("/:id", postController.update);

router.patch("/:id", postController.modify);

//# DELETE

router.delete("/:id", postController.destroy);

module.exports = router;
