const express = require("express");
const router = express.Router();
const burger = require("../models/burger")

router.get("/", (req, res)=>{
    let information = {
        burg: [],
        item: []
    };
    // get data from burger table
    burger.selectAll((data)=>{
        for (let i = 0; i < data.length; i++){
            information.burg.push(data[i]);
        }
        burger.getMenu((data)=>{
            for (let i = 0; i < data.length; i++){
                information.item.push(data[i]);
            }
            console.log(information);
        })
    })
})