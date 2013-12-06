//orientation fix
$.loginpage.orientationModes=[Titanium.UI.PORTRAIT];

var videoListMgr = Alloy.createController("videolist");

function attemptLogin() {
	
	var loginController = Alloy.createController("login");
	
	if($.username.value && $.passwd.value) {				
		
		
		loginController.doLogin($.username.value, $.passwd.value, function(success) {
			
			if(success) {

				Alloy.Globals.sessionMgr.startSession($.username.value);
				var videoListMgr = Alloy.createController("videolist");
				videoListMgr.populateList();	
			}
			
		});
		
	} else {								
		
		alert("Error:\n\nPlease enter valid login information.");			
		if(Alloy.Globals.progress) {
			Alloy.Globals.progress.hide();	
		}
	}	
}
function goToRegistration() {
	
	var registrationController = Alloy.createController("registration");
	registrationController.getView().open();
	$.destroy();	
}

/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
 	
$.loginpage.addEventListener("close", function() {
});
$.loginpage.addEventListener("open", function() {
});
$.loginpage.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
   $.loginpage.close();
});