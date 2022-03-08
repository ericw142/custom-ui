const express = require("express");
const LayoutModel = require("../models/layout.model")
const router = express.Router();

router.get("/test", function(req, res, next) {
    res.status(200).send("API is working properly");
});

router.route("/savedLayout").get(async (req, res) => {
    try {
        let savedLayout = await LayoutModel.findOne({user: req.ip});
        if (savedLayout) {
            res.status(200).send(savedLayout)
        } else {
            res.status(204).send("No results")
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

router.route("/newLayout").post(async (req, res) => {
    try {
        await LayoutModel.findOneAndUpdate({user: req.ip}, {user: req.ip, tasks: req.body.tasks, columns: req.body.columns, columnOrder: req.body.columnOrder}, {upsert: true})
        res.status(200).send("Updated")
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;