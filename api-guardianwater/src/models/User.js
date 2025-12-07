import { Schema, model } from "mongoose";
import mongooseSequence from 'mongoose-sequence';

const AutoIncrement = mongooseSequence(Schema);

const userSchema = new Schema({

    id_user: { 
        unique: true,
        type: Number
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

userSchema.plugin(AutoIncrement, { inc_field: 'id_user' });

export default model("User", userSchema);
