import { Router } from 'express';
import { crearUsuario, obtenerUsuarios } from '../controllers/usuarioController.js';

const router = Router();
router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);

export default router;