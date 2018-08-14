let connection = require('./connection.js');

let orm = {
  selectAll: (table, callback)=>{
    let queryString = 'SELECT * FROM ' + table;

    connection.query(queryString, (error, data)=>{
      if(error) throw error;
      callback(data);
    });
  },

  insertOne: (table, column, burgerInput, callback)=>{
    let queryString = 'INSERT INTO ' + table + '(' + column + ') VALUES (?)';

    connection.query(queryString, [burgerInput], (error, data)=>{
      if(error) throw error;
      callback(data);
    });
  },

  updateOne: (table, col, colVal, condition, conditionVal, callback)=>{
    let queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';

    connection.query(queryString, [colVal, conditionVal], (error, data)=>{
      if(error) throw error;
      callback(data);
    });
  },

  deleteOne: (table, condition, conditionVal, callback)=>{
    let queryString = 'DELETE FROM ' + table + ' WHERE ' + condition + '=?';

    connection.query(queryString, [conditionVal], (error, data)=>{
      if(error) throw error;
      callback(data);
    });
  }
};

module.exports = orm;