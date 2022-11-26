const express = require('express');
const router = express.Router();
const {Notice}=require("../models/Notice")
const { auth } = require("../middleware/auth");

router.post("/getnotices",auth, (req, res) => {
    Notice.find({})
    .exec((err, notices) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, notices })
        })
});

module.exports = router;