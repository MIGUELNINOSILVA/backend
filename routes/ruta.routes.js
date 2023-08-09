import {Router} from 'express';
import {check} from 'express-validator';
import { getRuta, postRuta, deleteRuta, putRutas } from '../controllers/Ruta.controllers.js';
import validateDocuments from '../middlewares/validate.documents.js';
import { rutaCentroExisteId, rutaExistsById, rutaExiste } from '../helpers/db.validators.js';
import Ruta from '../models/Ruta.js';
const router = Router();

router.get('/', getRuta);
router.post('/', [
    check('nombre').not().isEmpty(),
    check('nombre').custom(rutaExiste),
    check('centro').not().isEmpty(),
    check('centro').custom(rutaCentroExisteId),
    validateDocuments
],postRuta);

router.delete('/:id', [
    check('id').not().isEmpty(),
    check('id').custom(rutaExistsById)
],deleteRuta);

router.put('/:id', [
    check('id').not().isEmpty(),
    check('id').custom(rutaExistsById),
    check('nombre').not().isEmpty(),
    check('centro').not().isEmpty(),
    check('centro').custom(rutaCentroExisteId),
    validateDocuments
],putRutas)

export default router;