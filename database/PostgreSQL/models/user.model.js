const {Client} = require('pg');
const TABLE_NAME = process.env.TABLE_PREFIX + 'users';


/*******************************************************************
 * @Purpose: Query to get the user list
 * @QueryParam: NA
*******************************************************************/
module.exports.userList = () => {
    return new Promise(function(resolve, reject) {
        const sql = 'SELECT * FROM ' + TABLE_NAME;
        Client.conn.query(sql, (err, rows) => {
            if (!err) resolve(rows.rows);
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
        Client.conn.query('SELECT * FROM '+ TABLE_NAME +' WHERE userPkId = $1', [userpkid], (err, res) => {
            if (!err) resolve(res.rows[0]);
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
        Client.conn.query('DELETE FROM ' + TABLE_NAME + ' WHERE userPkId = $1', [userpkid], (err, res, fields) => {
            if (!err) resolve(res.rows);
            else reject(err);
        });
    });    
}


/*******************************************************************
 * @Purpose: Query to add a new user
 * @QueryParam: All the required details for a new user
*******************************************************************/
module.exports.addUser = (reqBody) => {
    return new Promise(function(resolve, reject) {
        var sql = {
            text: 'INSERT INTO ' + TABLE_NAME + '(pwd, name, email) VALUES($1, $2, $3);',
            values: [reqBody.pwd, reqBody.name, reqBody.email]
        }
        Client.conn.query(sql, function (err, user, fields) {
            if(err) reject(err);
            else resolve(1);
        });
    });
}


/*******************************************************************
 * @Purpose: Query to update an existing user's detail
 * @QueryParam: All the details(except password)
*******************************************************************/
module.exports.updateUser = (reqBody) => {
    return new Promise(function(resolve, reject) {
        var sql  = "UPDATE " + TABLE_NAME 
                + " SET name = '" + reqBody.name + "', email = '" + reqBody.email + "'"        
                + " WHERE userpkid = " + reqBody.userpkid;

        Client.conn.query(sql, (err, rows) => {
            if(err) reject(err);
            else resolve(0);
        });
    });    
}
