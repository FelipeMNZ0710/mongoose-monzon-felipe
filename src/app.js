import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

import usuarioRoutes from './src/routes/usuarioRoutes.js';
import proyectoRoutes from './src/routes/proyectoRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
}).catch(err => {
    console.error("Error fatal al iniciar la app:", err);
});