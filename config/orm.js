let connection = require("./connection.js");

let orm = {
  selectAll: (table, cb)=>{
    let queryString = "SELECT * FROM " + table;

    connection.query(queryString, (error, data)=>{
      if(error) throw error;
      cb(data);
    });
  },

  insertOne: (table, column, burgerInput, cb)=>{
    let queryString = "INSERT INTO " + table + "(" + column + ") VALUES (?)";

    connection.query(queryString, [burgerInput], (error, data)=>{
      if(error) throw error;
      cb(data);
    });
  },

  updateOne: (table, col, colVal, condition, conditionVal, cb)=>{
    let queryString = "UPDATE " + table + " SET " + col + "=?" + "WHERE " + condition + "=?";

    connection.query(queryString, [colVal, conditionVal], (error, data)=>{
      if(error) throw error;
      cb(data);
    });
  },

  deleteOne: (table, condition, conditionVal, cb)=>{
    let queryString = "DELETE FROM " + table + " WHERE " + condition + "=?";

    connection.query(queryString, [conditionVal], (error, data)=>{
      if(error) throw error;
      cb(data);
    });
  }
};

module.exports = orm;