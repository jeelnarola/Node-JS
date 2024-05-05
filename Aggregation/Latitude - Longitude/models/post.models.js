const mongoose = require('mongoose')
const postschema = new mongoose.Schema({
    title: String,
    body: String,
    active: { type: Boolean },
    address: String,
    location: {
        type: { type: String },
        coordinates: []
    },
    createBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
})

postschema.index({ location: "2dsphere" });

const postmodel = mongoose.model("post", postschema);

module.exports = postmodel;

