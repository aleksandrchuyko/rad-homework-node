import express from "express";
import * as notesController from "../../controllers/notes";

const router = express.Router();

import { validateReqBody } from '../../middlewares';

import { schemas } from '../../models/notes/note';

import { controllersWrapper } from '../../utils';



router.get("/", controllersWrapper(notesController.getAll));

router.get("/stats/", controllersWrapper(notesController.getStatistic));

router.get("/:noteId", controllersWrapper(notesController.getById));

router.post("/", validateReqBody(schemas.addSchema), controllersWrapper(notesController.addNew));

router.delete("/:noteId", controllersWrapper(notesController.removeNote));

router.patch("/:noteId", validateReqBody(schemas.addSchema), controllersWrapper(notesController.updateById));

router.post("/set", controllersWrapper(notesController.setMockCollection));


module.exports = router;
