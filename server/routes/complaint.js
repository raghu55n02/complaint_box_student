const express = require('express');
const router = express.Router();
const {Complaint}=require("../models/Complaint")
const { auth } = require("../middleware/auth");

router.post("/saveComplaint", auth, (req, res) => {

    const complaint = new Complaint(req.body)

    complaint.save((err, complaint) => {
        console.log(err)
        if (err) return res.json({ success: false, err })

        Complaint.find({ '_id': complaint._id })
            .populate('writer')
            .exec((err, result) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({ success: true, result })
            })
    })
})

router.post("/getComplaints/user",auth, (req, res) => {
    //console.log(req.body)
    Complaint.find({"writer": req.body.userId })
        .populate('writer')
        .exec((err, complaints) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, complaints })
        })
});

router.post("/getComplaints",auth, (req, res) => {
    Complaint.find({})
        .populate('writer')
        .exec((err, complaints) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, complaints })
        })
});

module.exports = router;