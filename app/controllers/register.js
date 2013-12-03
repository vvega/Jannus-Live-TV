exports.doRegistration = function(params, callback) {	
    
    Alloy.Globals.progress.setMessage(Ti.Locale.getString('registering'));    
        
    //send data	
	Alloy.Globals.ajaxClient.sendData(Alloy.CFG.register_path, params, callback);

};