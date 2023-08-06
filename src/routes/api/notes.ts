const express = require("express");
const notesController = require("../../controllers/notes");

const router = express.Router();

const { validateReqBody } = require('../../middlewares');

const {schemas} = require('../../models/notes/note');

const { controllersWrapper } = require('../../utils');



router.get("/", controllersWrapper(notesController.getAll));

router.get("/stats/", controllersWrapper(notesController.getStatistic));

router.get("/:noteId", controllersWrapper(notesController.getById));

router.post("/", validateReqBody(schemas.addSchema), controllersWrapper(notesController.addNew));

router.delete("/:noteId", controllersWrapper(notesController.removeNote));

router.patch("/:noteId", validateReqBody(schemas.addSchema), controllersWrapper(notesController.updateById));

router.post("/set", controllersWrapper(notesController.setMockCollection));


module.exports = router;
