const orm = require('../config/orm.js');

let burger = {
  selectAll: (cb)=>{
    orm.selectAll('burgers', (res)=>{
      cb(res);
    });
  },
  getMenu: (cb)=>{
    orm.selectAll('menu', (res)=>{
      cb(res);
    });
  },
  insertOne: (val, cb)=>{
    orm.insertOne('burgers', 'burger_name', val, (res)=>{
      cb(res);
    });
  },
  updateOne: (colVal, conditionVal, cb)=>{
    orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal,(res)=>{
      cb(res);
    });
  },
  deleteOne: (conditionVal, cb)=>{
    orm.deleteOne('burgers', 'id', conditionVal, (res)=>{
      cb(res);
    });
  }
};

module.exports = burger;