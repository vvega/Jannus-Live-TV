//orientation fix
$.loginpage.orientationModes=[Titanium.UI.PORTRAIT];

var videoListMgr = Alloy.createController("videolist");

function attemptLogin() {
	
	var loginController = Alloy.createController("login");
	
	if($.username.value && $.passwd.value) {	
	
		loginController.doLogin($.username.value, $.passwd.value, function(result) {
			
			if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
			
			if(result.message == Alloy.Globals.SUCCESS) {
				
				var sessionData = {
					username: $.username.value,
					sessionID: result.data.sessionID
				};
				
				Alloy.Globals.sessionMgr.startSession(sessionData);
				var videoListMgr = Alloy.createController("videolist");
				videoListMgr.populateList();
					
			} else if(result.message == Alloy.Globals.PASSWORD_FAILURE) {
				var alertDialog = Alloy.createController("alertdialog");
				alertDialog.showDialog();
			}
			
		});
		
	} else {								
		
		alert("Error:\n\nPlease enter valid login information.");			
		
	}	
}

function goToRegistration() {
	
	var registrationController = Alloy.createController("registration");
	registrationController.goToRegistration();
}

function handleDialog() {
	alert($.reset_email.getValue());
	$.dialog.close();
}

/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
$.login_btn.addEventListener('touchstart', function(){
	this.setBackgroundGradient(null);
    this.setBackgroundColor('#cccccc');
 });	
$.register_btn.addEventListener('touchstart', function(){
	this.setBackgroundGradient(null);
    this.setBackgroundColor('#cccccc');
 });
$.login_btn.addEventListener('touchend', function(){
    this.setBackgroundGradient(Alloy.Globals.styles.jannus_gradient);
 });	
$.register_btn.addEventListener('touchend', function(){
     this.setBackgroundGradient(Alloy.Globals.styles.jannus_gradient);
 });
$.loginpage.addEventListener("close", function() {
	$.destroy();	
});
$.loginpage.addEventListener("open", function() {
});
$.loginpage.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
   $.loginpage.close();
});