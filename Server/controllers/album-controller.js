const express = require("express");
const albumLogic = require("../logic/album");
const router = express.Router();
const Album = require("../models/Album");

router.get("/albums", async (request, response) => {
    try {
        const albums = await albumLogic.getAllAlbums();
        response.json(albums);
    } catch (error) {
        response.status(500).send(error);
    }
});

router.get("/album/:id", async (request, response) => {
    try {
        const id = request.params.id
        const album = await albumLogic.getOneAlbum(id);
        response.json(album);
    } catch (error) {
        response.status(500).send(error);
    }
});

// router.patch("/album/:id", async (request, response) => {
//     try {
//         const id = request.params.id
//         const body = request.body;
//         const album = await albumLogic.getOneAlbum(id);
//         response.json(album);
//     } catch (error) {
//         response.status(500).send(error);
//     }
// });

router.put("/album/:_id", async (request, response) => {
    const albumUpdate = new Album(request.body);
    try {
        const album = await albumLogic.updateAlbum(albumUpdate);
        response.json(album);
    } catch (error) {
        response.status(500).send(error);
    }
});

module.exports = router;