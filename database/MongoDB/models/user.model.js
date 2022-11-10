const mongoose = require('mongoose');
const User = mongoose.model('User');


/*******************************************************************
 * @Purpose: Query to get the user list
 * @QueryParam: NA
*******************************************************************/
module.exports.userList = () => {
    return new Promise(function(resolve, reject) {
        User.find((err, res) => {
            if (!err) resolve(res);
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
        User.findOne({ _id: userpkid }, (err, rows) => {
            if (!err) resolve(rows);
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
        User.remove({_id: mongoose.Types.ObjectId(userpkid)}, (err, res) => {
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
    var user = new User();
    user.name = reqBody.name;
    user.email = reqBody.email;
    user.pwd = reqBody.pwd;
    user.pwd_reset_token = null;

    return new Promise(function(resolve, reject) {
        user.save((err, doc) => {
            if (!err) resolve(1);
            else reject(err);
        });
    });
}


/*******************************************************************
 * @Purpose: Query to update an existing user
 * @QueryParam: All the details(except password)
*******************************************************************/
module.exports.updateUser = (reqBody) => {
    return new Promise(function(resolve, reject) {
        User.findByIdAndUpdate(
            { _id: mongoose.Types.ObjectId(reqBody.userpkid) }, 
            { $set: {name: reqBody.name, email: reqBody.email} }, 
            (err, doc, res) => {
                if (!err) resolve(1);
                else reject(err);         
            }
        );
    });    
}
