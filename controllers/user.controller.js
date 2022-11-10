const bcrypt = require('bcryptjs');
const userModel = require('../database/PostgreSQL/models/user.model'); //'PostgreSQL', 'MongoDB', 'MySQL'



/*******************************************************************
 * @Purpose: GET request to fetch user list
 * @Input: N/A
 * @Output: {"data": [], "message": "string", "status": integer=>(1 for success, 0 for failed)}
*******************************************************************/
 module.exports.userList = (req, res) => {
    userModel.userList()
    .then(result => {
        return res.json({"data": result, "status": 1, "message": result.length+" record(s) found!"});
    }).catch(err => {
        return res.json({"data": [], "status": 0, "message": "No records found!"});
    });
}


/*******************************************************************
 * @Purpose: GET request to get a single user's detail
 * @Input: {"id": integer}
 * @Output: {"data": {}, "message": "string", "status": integer=>(1 for success, 0 for failed)}
*******************************************************************/
 module.exports.userDetail =  (req, res) => {
    userModel.userDetail(req.params.id)
    .then(result => {
        return res.json({"data": result, "status": 1});
    }).catch(err => {
        //console.log(err);
        return res.json({"data": {}, "status": 0, "message": "No records found!"});
    });
}


/*******************************************************************
 * @Purpose: DELETE request to delete a single user
 * @Input: {"id": integer}
 * @Output: {"message": "string", "status": integer=>(1 for success, 0 for failed)}
*******************************************************************/
 module.exports.deleteUser =  (req, res) => {	
    userModel.deleteUser(req.params.id)
    .then(result => {
        return res.json({"status": 1, "message": "Record deleted successfully!"});
    }).catch(err => {
        console.log(err);
        return res.json({"status": 0, "message": "Record deletion failed!"});
    });
}


/*******************************************************************
 * @Purpose: POST request to create a single user
 * @Input: {"id": integer}
 * @Output: {"data": {}, "message": "string", "status": integer=>(1 for success, 0 for failed)}
*******************************************************************/
 module.exports.addUser = async (req, res) => {
    req.body.pwd = await bcryptHash(req.body.pwd);
 
    userModel.addUser(req.body)
    .then(result => {
        return res.json({'status': 1, 'message': 'Record inserted successfully.'});
    }).catch(err => {
        return res.json({'status': 0, 'message': 'Insertion Failed'});
    });
};


/*******************************************************************
 * @Purpose: PUT request to update a single user's detail
 * @Input: {"id": integer}
 * @Output: {"data": {}, "message": "string", "status": integer=>(1 for success, 0 for failed)}
*******************************************************************/
 module.exports.updateUser = (req, res) =>{
    userModel.updateUser(req.body)
    .then(result => {
        return res.json({"status": 1, "message": "Record updated successfully!"});
    }).catch(err => {
        return res.json({"status": 0, "message": "Record updation failed!"});
    });
}


/*******************************************************************
 * @Purpose: Helper function to create hash password
 * @Input: {"pwd": string}
 * @Output: {"pwd": string} // encoded-hashed-version of the raw password
*******************************************************************/
function bcryptHash(pwd) {
    const hash = new Promise((success, failure) => {
        bcrypt.genSalt(10, async (err, salt) => {
            const hash = await new Promise((success, failure) => {
                bcrypt.hash(pwd, salt, (err, hash) => {
                    if(err) failure(err);
                    else success(hash);
                });
            });
            if(err) failure(err);
            else success(hash);
        });
    });
    return hash;
}
