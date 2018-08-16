const express = require("express");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", (req, res)=>{
    burger.selectAll((data)=>{
        let information = {
            burg: data
        };
        res.render("index", information)
    })
    // // get data from burger table
    // burger.selectAll((data)=>{
    //     for (let i = 0; i < data.length; i++){
    //         information.burg.push(data[i]);
    //     };
    //     res.render("index", information)
    // })
})

router.post("/burger", (req, res)=>{
    burger.insertOne(["burger_name"], [req.body.burger_name], (data)=>{
    res.redirect("/");
})
})

router.put("/burger/:id", (req, res)=>{
    let condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: true
    }, condition, (data)=>{
        res.redirect("/");
    })
})

module.exports = router;