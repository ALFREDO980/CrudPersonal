const { Schema, model } = require("mongoose");

const contactoSchema = Schema({
    hardware: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true,
        unique: true

    },
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    lanzamiento: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = model("Contacto", contactoSchema);