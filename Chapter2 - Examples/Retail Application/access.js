var mongoose = require('mongoose');
var userSchema = require('./user');

var User = mongoose.model('User', userSchema, 'users');

var u = new User({
	profile: { username: 'vkarpov15' },
	data: { oauth: '123' }
});

modifyUserProfile(u, 'http://pbs.twimg.com/profile_images/550304223036854272/Wwmwuh2t.png');

// modifyUserData can **only** modify
// user.profile, not user.data
function modifyUserProfile (user, picture, callback) {
	user.profile.picture = picture;
	console.log(user);
	user.save (function(error, user) {
		console.log("HEEEEEEY");
		if (error) {
			console.log(error);
			process.exit(1);
		}
		console.log(require('util').inspect(user));
		process.exit(0);
	});
}

