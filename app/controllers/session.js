exports.sessionExists = function() {
	//TODO: Check for existing login properties/stored session before displaying login.
	//check for existing session
	if(Titanium.App.Properties.hasProperty('session_id')) {
		return true;
	}
	return false;
	
};
exports.startSession = function(user) {
	Titanium.App.Properties.setString('username', user.username);
	Titanium.App.Properties.setString('session_id', user.sessionID);
};
exports.endSession = function() {
	Titanium.App.Properties.removeProperty('username');
	Titanium.App.Properties.removeProperty('session_id');
};
