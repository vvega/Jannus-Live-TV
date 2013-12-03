//orientation fix
$.index.orientationModes=[Titanium.UI.PORTRAIT];

var videoListMgr = Alloy.createController("videolist");

function attemptLogin() {
	
	var loginController = Alloy.createController("login");
	
	if($.username.value && $.passwd.value) {				
		
		
		loginController.doLogin($.username.value, $.passwd.value, function(success) {
			
			if(success) {

				Alloy.Globals.sessionMgr.startSession($.username.value);
				videoListMgr.populateList();	
			}
			
		});
		
	} else {								
		
		alert("Error:\n\nPlease enter valid login information.");			
		Alloy.Globals.progress.hide();	
	}	
}
function goToRegistration() {
	
	var registrationController = Alloy.createController("registration");
	registrationController.getView().open();	
}

if(Alloy.Globals.sessionMgr.sessionExists()) {	
	
	//go to video list if active session exists
	videoListMgr.populateList();
	
} else {

	$.index.open();
	
}



/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
 	
$.index.addEventListener("close", function() {
   //clean data binding to prevent memory leaks
   //$.destroy();
});
$.index.addEventListener("open", function() {

});
$.index.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
   $.index.close();
   Ti.Android.currentActivity.finish();
});
