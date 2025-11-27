import mongoose from 'mongoose';

const detalleTareaSchema = new mongoose.Schema({
    contenidoExtenso: String,
    archivosAdjuntos: [String],
    fechaLimite: Date
});

export default mongoose.model('DetalleTarea', detalleTareaSchema);