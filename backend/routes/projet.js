const express = require("express");
const projetController = require("../controllers/projet");
const router = express.Router();

router.post("/projet", projetController.addProjet);
router.get("/projet", projetController.getProjects);
router.put("/projet:id", projetController.updateProjet);
router.delete("/projet:id", projetController.deleteProject);

module.exports = router;
