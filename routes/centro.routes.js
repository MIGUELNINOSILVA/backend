import {Router} from 'express';
import {check} from 'express-validator';
import { getCentro, postCentro, deleteCentro, putCentros } from '../controllers/centro.controller.js';
import validateDocuments from '../middlewares/validate.documents.js';
import { centroExiste } from '../helpers/db.validators.js';

const router = Router();

router.get('/', getCentro);
router.post('/', [
    check('nombre').not().isEmpty(),
    check('nombre').custom(centroExiste),
    check('descripcion').not().isEmpty(),
    check('estado').not().isEmpty(),
    check('ciudad').not().isEmpty(),
    validateDocuments
],postCentro);

router.delete('/:id', [
    check('id').isMongoId(),
    validateDocuments
],deleteCentro);

router.put('/:id', [
    check('id').isMongoId(),
    check('nombre').not().isEmpty(),
    check('descripcion').not().isEmpty(),
    check('estado').not().isEmpty(),
    check('ciudad').not().isEmpty(),
    validateDocuments
], putCentros);

export default router;