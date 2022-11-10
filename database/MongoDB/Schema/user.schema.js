const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {type: String},
	email: { type: String, unique: true },
	pwd: {type: String},
	pwd_reset_token: { type: String, default: null }
});


mongoose.model('User', userSchema);