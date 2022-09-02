const express = require("express");
const router = express.Router();

const {
  getAll,
  add,
  getOne,
  edit,
  deleteOne,
} = require("../controllers/products");

router.route("/").get(getAll).post(add);
router.route("/:id").get(getOne).patch(edit).delete(deleteOne);

module.exports = router;
