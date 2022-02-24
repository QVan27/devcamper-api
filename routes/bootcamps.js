const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

const router = express.Router();

router.route("/").get(getBootcamps).post(createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: "show all bootcamps",
//   });
// });

// router.get("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: `show bootcamps with id ${req.params.id}`,
//   });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: "create new bootcamps",
//   });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: `update bootcamps with id ${req.params.id}`,
//   });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     msg: `delete bootcamps with id ${req.params.id}`,
//   });
// });

module.exports = router;
