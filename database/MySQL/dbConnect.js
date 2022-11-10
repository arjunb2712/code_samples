var mysql = require('mysql');


/*******************************************************************
 * @Purpose: Get the connection details from the .env
*******************************************************************/
 var mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASS,
    database: process.env.MYSQLDB,
    multipleStatements: true
});


/*******************************************************************
 * @Purpose: Establish the connection
*******************************************************************/
 mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
		console.log(err);
	}
});


/*******************************************************************
 * @Purpose: Set up the connection object with mysql object to make it available to all the models
*******************************************************************/
Object.defineProperty(mysql, 'conn', {value: mysqlConnection});
