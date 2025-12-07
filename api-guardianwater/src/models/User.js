import { Schema, model } from "mongoose";

const userSchema = new Schema({

    id_user: { 
        required: true,
        unique: true,
        type: String
    }, 

    name: {
        type: String, 
        required: true,
        trim: true
    },

    lastname: {
        type: String, 
        required: true,
        trim: true
    },

    email: {
        type: String, 
        required: true,
        unique: true,
    },

    password: {
        type: String, 
        required: true,
    },

    dateCreated: { 
        type: Date,
        default: Date.now
    },

    role: { 
        type: String,
        enum: ['User', 'Admin'],
        default: 'User'
    },

    // Dirección física completa
    address: {
        street: { type: String, trim: true },
        city: { type: String, trim: true },
        state: { type: String, trim: true },
        country: { type: String, trim: true },
        postalCode: { type: String }
    },


});


export default model("User", userSchema);
