const mongoose = require('mongoose');

// Esquema de Proyectos
const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String, // Contenido en formato Markdown
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Fecha de creación
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Relación con un usuario
        ref: 'users', // Nombre de la colección de usuarios
        required: true,
    },
});

// Modelo de Proyectos
const Project = mongoose.model('projects', projectSchema);

module.exports = Project;

