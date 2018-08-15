const express = require("express");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", (req, res)=>{
    let information = {
        burg: [],
    };
    // get data from burger table
    burger.selectAll((data)=>{
        for (let i = 0; i < data.length; i++){
            information.burg.push(data[i]);
        };
        res.render("index", information)
    })
})

module.exports = router;