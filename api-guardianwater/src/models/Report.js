import { Schema, model } from "mongoose";

const reportSchema = new Schema({

    id_report: {
        type: String,
        required: true,
        unique: true
    },

    user: {
        type: String,     // referencia al id del usuario que crea el reporte
        required: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    dateReported: {
        type: Date,
        default: Date.now
    },

    dateUpdate: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: ['Enviado', 'Revision', 'Completado'],
        default: 'Enviado'
    },

    image: {
        type: String, // URL o path de la imagen
        required: false
    },
        // Coordenadas de geolocalización
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number],  // [longitud, latitud]
            default: [0, 0]
        }
    }

});

export default model("Report", reportSchema);
