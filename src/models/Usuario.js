import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    direccion: {
        calle: String,
        ciudad: String,
        codigoPostal: String
    },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

usuarioSchema.pre(/^find/, function(next) {
    this.find({ deletedAt: null });
    next();
});

export default mongoose.model('Usuario', usuarioSchema);