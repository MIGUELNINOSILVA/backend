import {Router} from 'express';
import {check} from 'express-validator';
import { getRuta, postRuta } from '../controllers/Ruta.controllers.js';
import validateDocuments from '../middlewares/validate.documents.js';
import { rutaCentroExisteId, rutaExistsById, rutaExiste } from '../helpers/db.validators.js';
const router = Router();

router.get('/', getRuta);
router.post('/', [
    check('nombre').not().isEmpty(),
    check('nombre').custom(rutaExiste),
    check('centro').not().isEmpty(),
    check('centro').custom(rutaCentroExisteId),
    validateDocuments
],postRuta);

export default router;