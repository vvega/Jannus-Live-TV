exports.sessionExists = function() {
	//TODO: Check for existing login properties/stored session before displaying login.
	//check for existing session
	if(Titanium.App.Properties.hasProperty('uid')) {
		return true;
	}
	return false;
	
};
exports.startSession = function(user) {
	Titanium.App.Properties.setString('uid', user);
};
exports.endSession = function() {
	Titanium.App.Properties.removeProperty('uid');
};
