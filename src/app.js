import express from 'express';
import connectDB from './src/config/db.js';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });
});