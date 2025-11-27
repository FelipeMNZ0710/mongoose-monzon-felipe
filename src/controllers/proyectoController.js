import Proyecto from '../models/Proyecto.js';
import Tarea from '../models/Tarea.js';

export const crearProyecto = async (req, res) => {
    try {
        const proyecto = new Proyecto(req.body);
        await proyecto.save();
        res.status(201).json(proyecto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const obtenerProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find()
            .populate('colaboradores', 'nombre email');
        res.status(200).json(proyectos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const eliminarProyecto = async (req, res) => {
    try {
        const { id } = req.params;
        const proyecto = await Proyecto.findById(id);

        if (!proyecto) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }

        proyecto.deletedAt = new Date();
        await proyecto.save();

        await Tarea.updateMany(
            { proyecto: id }, 
            { deletedAt: new Date() }
        );

        res.status(200).json({ message: 'Proyecto y tareas asociadas eliminados correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
