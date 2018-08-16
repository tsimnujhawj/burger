const orm = require("../config/orm.js");

// Create the burger object
let burger = {
    // Select all burger table entries
    selectAll: (cb)=> {
      orm.selectAll('burgers', (res)=> {
        cb(res);
      });
    },
  
    // The letiables cols and vals are arrays
    insertOne: (cols, vals, cb)=> {
      orm.insertOne('burgers', cols, vals, (res)=> {
        cb(res);
      });
    },
  
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: (objColVals, condition, cb)=> {
      orm.updateOne('burgers', objColVals, condition, (res)=> {
        cb(res);
      });
    }
  };

module.exports = burger;