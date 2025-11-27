import { Router } from 'express';
import { crearProyecto, obtenerProyectos, eliminarProyecto } from '../controllers/proyectoController.js';
import Proyecto from '../models/Proyecto.js'; // Importamos directo para el metodo extra

const router = Router();

router.post('/', crearProyecto);
router.get('/', obtenerProyectos);
router.delete('/:id', eliminarProyecto);

router.post('/:id/colaboradores', async (req, res) => {
    try {
        const { id } = req.params;
        const { usuarioId } = req.body;

        const proyecto = await Proyecto.findById(id);
        if (!proyecto) return res.status(404).json({ msg: 'Proyecto no encontrado' });

        proyecto.colaboradores.addToSet(usuarioId);
        await proyecto.save();

        res.status(200).json({ msg: 'Colaborador agregado', proyecto });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

export default router;