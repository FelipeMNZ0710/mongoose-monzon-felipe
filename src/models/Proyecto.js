import mongoose from 'mongoose';

const proyectoSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descripcion: String,
    colaboradores: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Usuario' 
    }],
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

proyectoSchema.pre(/^find/, function(next) {
    this.find({ deletedAt: null });
    next();
});

export default mongoose.model('Proyecto', proyectoSchema);