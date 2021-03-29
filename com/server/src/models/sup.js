const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Supp = new Schema(
    {
        nomSupp: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        price: {
            type: String,
            required: true,
        }
    }
);

const SuppEx = mongoose.model("Supp", Supp);
module.exports = SuppEx;
