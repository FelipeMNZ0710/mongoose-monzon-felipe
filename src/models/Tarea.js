import mongoose from 'mongoose';

const tareaSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    proyecto: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Proyecto',
        required: true
    },
    detalle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DetalleTarea'
    },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

tareaSchema.pre(/^find/, function(next) {
    this.find({ deletedAt: null });
    next();
});

export default mongoose.model('Tarea', tareaSchema);