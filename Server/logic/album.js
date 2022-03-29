const Album = require("../models/Album");
const Category = require("../models/Category");

function getAllAlbums() {

    return Album.find({});
    // return Album.find({}).populate("categories").exec();
}

function getOneAlbum(id) {
    return Album.find({ _id: id }).exec();
}



function updateAlbum(album) {
    console.log(album._id);
    return new Promise((resolve, reject) => {
        Album.updateOne({ _id: album._id }, album, (err, info) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(info.n ? album : null);
        });
    });
}

module.exports = { getAllAlbums, getOneAlbum, updateAlbum }