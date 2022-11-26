const express = require('express');
const router = express.Router();
const {Reply}=require("../models/Reply")
const { auth } = require("../middleware/auth");
router.post("/getreplies",auth, (req, res) => {
    Reply.find({"send_to": req.body.userId})
    .exec((err, replies) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, replies })
        })
});
module.exports = router;