const mongoose = require("mongoose");


const AlbumSchema = mongoose.Schema(
    {
        albumName: { type: String, required: true, minlength: 2, maxlength: 30 },
        albumImage: { type: String, required: true, minlength: 2, maxlength: 30 },
        artist: { type: String, required: true, minlength: 2, maxlength: 30 },
        date: { type: String, required: true, minlength: 2, maxlength: 30 },

        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
    },
    { versionKey: false, toJSON: { virtuals: true }, id: false }
);
AlbumSchema.virtual("category", {
    ref: "Category",
    localField: "categoryId",
    foreignField: "_id",
    justOne: true,
});
const Album = mongoose.model("Album", AlbumSchema, "album");
module.exports = Album;