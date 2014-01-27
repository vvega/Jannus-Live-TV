//orientation fix
$.loginpage.orientationModes=[Titanium.UI.PORTRAIT];

var videoListMgr = Alloy.createController("videolist");

function attemptLogin() {
	
	var loginController = Alloy.createController("login");
	
	if($.username.value && $.passwd.value) {				
		
		
		loginController.doLogin($.username.value, $.passwd.value, function(result) {
			
			if(result == Alloy.Globals.SUCCESS) {

				Alloy.Globals.sessionMgr.startSession($.username.value);
				var videoListMgr = Alloy.createController("videolist");
				videoListMgr.populateList();
					
			} else if(result == Alloy.Globals.PASSWORD_FAILURE) {
				var alertDialog = Alloy.createController("alertdialog");
				alertDialog.showDialog();
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
	//Alloy.Globals.progress.setMessage("Going to registration page...");
	//Alloy.Globals.progress.show();
	registrationController.goToRegistration();
}

function handleDialog() {
	alert($.reset_email.getValue());
	$.dialog.close();
}

/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
 	
$.loginpage.addEventListener("close", function() {
	$.destroy();	
});
$.loginpage.addEventListener("open", function() {
});
$.loginpage.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
   $.loginpage.close();
});