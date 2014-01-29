exports.doLogin = function(user, pass, callback) {

	Alloy.Globals.progress.setMessage(Ti.Locale.getString('logging_in'));
	if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }
	
    //build parameter JSON object 
    var params = {
    	username : user, 
    	password : pass,
    	client : Alloy.CFG.client
    };
    
    Alloy.Globals.ajaxClient.sendData(Alloy.CFG.login_path, params, callback);
};