import {Router} from 'express';
import {check} from 'express-validator';
import {getCampers, postCampers, deleteCampers, putCampers} from '../controllers/camper.controllers.js';
import validateDocuments from '../middlewares/validate.documents.js';
import { camperExistsById, camperExistsByIdentificacion } from '../helpers/db.validators.js';

const router = Router();

router.get('/', getCampers);

router.post('/', [
    check('nombre', 'Nombre es requerido').not().isEmpty(),
    check('tipoIdentificacion', 'Tipo de identificacion es requerido').not().isEmpty(),
    check('NroIdentificacion', 'Número de identificación debe tener 10 dígitos').isLength({ min: 10, max: 10 }),
    check('NroIdentificacion', 'Número de identificcion  repetido').custom(camperExistsByIdentificacion),
    check('email', 'Email es requerido').isEmail(),
    check('password', 'Password es requerido').not().isEmpty(),
    check('level', 'Level es requerido').not().isEmpty(),
    check('levelState', 'State es requerido').not().isEmpty(),
    check('estado', 'Estado es requerido').not().isEmpty,
    check('imagen', 'Imagen es requerido').not().isEmpty,
    check('rol', 'rol es requerido').not().isEmpty(),
    check('promedio', 'promedio es requerido').not().isEmpty(),
    validateDocuments
],postCampers);

router.delete('/:id',[
    check('id', 'Id es requerido').isMongoId(),
    check('id').custom(camperExistsById),
    validateDocuments
],deleteCampers);

router.put('/:id', [
    check('id', 'Id es requerido').isMongoId,
    check('nombre', 'Nombre es requerido').not().isEmpty(),
    check('tipoIdentificacion', 'Tipo de identificacion es requerido').not().isEmpty(),
    check('NroIdentificacion', 'Número de identificación debe tener 10 dígitos').isLength({ min: 10, max: 10 }),
    check('email', 'Email es requerido').isEmail(),
    check('password', 'Password es requerido').not().isEmpty(),
    check('level', 'Level es requerido').not().isEmpty(),
    check('levelState', 'State es requerido').not().isEmpty(),
    check('estado', 'Estado es requerido').not().isEmpty,
    check('imagen', 'Imagen es requerido').not().isEmpty,
    check('rol', 'rol es requerido').not().isEmpty(),
    check('promedio', 'promedio es requerido').not().isEmpty(),
    validateDocuments],putCampers)
export default router;