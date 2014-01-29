exports.doRegistration = function(params, callback) {	
    
    Alloy.Globals.progress.setMessage(Ti.Locale.getString('registering')); 
    if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }  
        
    //send data	
	Alloy.Globals.ajaxClient.sendData(Alloy.CFG.register_path, params, callback);

};