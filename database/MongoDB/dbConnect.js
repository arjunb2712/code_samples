const mongoose = require('mongoose');

/*const authData =  {
    "user": process.env.MONGODB_USER,
    "pass": process.env.MONGODB_PASS,
	"useNewUrlParser": true,
	"useCreateIndex": true,
	"useFindAndModify": false,
	"useUnifiedTopology": true
};*/
const authData =  {
	"useNewUrlParser": true,
	"useCreateIndex": true,
	"useFindAndModify": false,
	"useUnifiedTopology": true
};

mongoose.connect(
	process.env.MONGODB_URI, 
	authData,
	(err) => {
		if (!err) { console.log('MongoDB connection succeeded.'); }
		else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
	}
);

require('./Schema/user.schema');
