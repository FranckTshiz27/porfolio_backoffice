const express = require("express");
const router = express.Router();
const technologieController = require("../controllers/technologie");
router.get("/technologie", technologieController.getTechnologies);
router.post("/technologie", technologieController.addTechnologie);
router.put("/technologie/:id", technologieController.updateTechnologie);
router.delete("/technologie/:id", technologieController.deleteTechnologie);
module.exports = router;
