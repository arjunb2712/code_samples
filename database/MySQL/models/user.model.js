let mysql = require('mysql');
const bcrypt = require('bcryptjs');
var TABLE_NAME = process.env.TABLE_PREFIX + 'users';


/*******************************************************************
 * @Purpose: Query to get the user list
 * @QueryParam: NA
*******************************************************************/
 module.exports.userList = () => {
    return new Promise(function(resolve, reject) {
        mysql.conn.query('SELECT * FROM ' + TABLE_NAME, (err, rows) => {
            if (!err) resolve(rows);
            else reject(err);
        });
    });
}


/*******************************************************************
 * @Purpose: Query to get a single user's detail
 * @QueryParam: user primary key id
*******************************************************************/
 module.exports.userDetail = (userpkid) => {		
    return new Promise(function(resolve, reject) {
        mysql.conn.query('SELECT * FROM '+ TABLE_NAME +' WHERE userPkId = ?', [userpkid], (err, rows) => {
            if (!err) resolve(rows[0]);
            else reject(err);
        });
    });    
}


/*******************************************************************
 * @Purpose: Query to delete a particular user
 * @QueryParam: user primary key id
*******************************************************************/
 module.exports.deleteUser = (userpkid) => {	
    return new Promise(function(resolve, reject) {
        mysql.conn.query('DELETE FROM '+ TABLE_NAME +' WHERE userPkId = ?', [userpkid], (err, rows) => {
            if(err) reject(err);
            else {
                if(rows.affectedRows != undefined && rows.affectedRows) {
                    resolve(rows.affectedRows);
                } else resolve(0);
            }  
        });
    });    
}


/*******************************************************************
 * @Purpose: Query to add a new user
 * @QueryParam: All the required details for a new user
*******************************************************************/
 module.exports.addUser = (reqBody) => {
    return new Promise(function(resolve, reject) {
        var post  = {name: reqBody.name, email: reqBody.email, pwd: reqBody.pwd};
        var sql = 'INSERT INTO '+ TABLE_NAME +' SET ?';

        mysql.conn.query(sql, post, (err, rows) => {
            console.log(rows)
            if (err) reject(err);
            else {
                if(rows.affectedRows != undefined && rows.affectedRows) {
                    resolve(rows.affectedRows);
                } else resolve(0);
            }  
        });
    });    
};


/*******************************************************************
 * @Purpose: Query to updatean existing user
 * @QueryParam: All the details(except password)
*******************************************************************/
 module.exports.updateUser = (reqBody) => {
    return new Promise(function(resolve, reject) {
        var sql  = 'UPDATE '+ TABLE_NAME 
            + ' SET name = ?, email = ?' 
            + ' WHERE userpkid = ?;';
        var values = [reqBody.name, reqBody.email, reqBody.userpkid];

        mysql.conn.query(sql, values, (err, rows) => {
            if (!err) resolve(1);
            else reject(err);
        });
    });    
}
