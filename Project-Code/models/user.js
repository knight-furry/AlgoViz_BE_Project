var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	username: String,
	password: String,
	passwordConf: String,
}),
User = mongoose.model('User', userSchema);
// export= let username1 = 
module.exports = User;
// export const email=0;