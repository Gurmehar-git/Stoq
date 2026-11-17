const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    sku: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
        min: 0
    },

    quantity: {
        type: Number,
        min: 0,
        default: 0,
        validate: {
            validator: Number.isInteger,
            message: "Quantity must be a whole number"
        }
    },
    category: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        trim: true,
        default: ""
    },

    lowStockThreshold: {
        type: Number,
        min: 0,
        default: 5,
        validate: {
            validator: Number.isInteger,
            message: "Threshold must be a whole number"
        }
    }
});