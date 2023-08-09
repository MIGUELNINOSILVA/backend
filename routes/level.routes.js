import { Router } from "express";
import { check } from "express-validator";
import { getLevel, postLevel, deleteLevel, putlevel } from "../controllers/level.controller.js";
import validateDocuments from "../middlewares/validate.documents.js";
import { levelExiste, levelExistsById } from "../helpers/db.validators.js";
const router = Router();

router.get("/", getLevel);
router.post(
  "/",
  [
    check("nombre", "Nombre obligatorio").not().isEmpty(),
    check("nombre", "Nombre obligatorio").custom(levelExiste),
    check("ruta", "Ruta obligatorio").not().isEmpty(),
    check("duracion", "Duracion obligatorio").not().isEmpty(),
    validateDocuments,
  ],
  postLevel
);

router.delete('/:id',[
    check("id", "Id obligatorio").isMongoId(),
    check("id").custom(levelExistsById),
    validateDocuments
],deleteLevel)

router.put('/:id',[
    check("id", "Id obligatorio").isMongoId(),
    check("id").custom(levelExistsById),
    check("nombre", "Nombre obligatorio").not().isEmpty(),
    check("ruta", "Ruta obligatorio").not().isEmpty(),
    validateDocuments
],putlevel)

export default router;
