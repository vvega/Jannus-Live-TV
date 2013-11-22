
var sessionMgr = Alloy.createController("session");
var videoListMgr = Alloy.createController("videolist");

if(sessionMgr.sessionExists()) {
	
	//go to video list if active session exists
	videoListMgr.populateList();
	
} else {
	
	//go to login screen with registration capability
	$.index.addEventListener("open", function() {
		
		$.register_btn.controller = Alloy.createController("register");
		$.login_btn.controller = Alloy.createController("login");
		
		$.login_btn.addEventListener("click", function(e) {
		
			//if($.username.value && $.passwd.value) {		
				
				//if successful 
				if(e.source.controller.doLogin($.username.value,$.passwd.value)) {
					
				} else {
					
					alert("Login failed.");
				}
			
			/*} else {
				
				alert("Please enter valid login information.");
				
			}*/
		});
		
		$.register_btn.addEventListener("click", function(e) {
			
			/*var progressIndicator = Ti.UI.Android.createProgressIndicator({
			  message: Ti.Locale.getString('loading'),
			  location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
			  type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
			  cancelable: true
			});
			progressIndicator.show();*/
		
			$.register_btn.controller.getView().open();	
		});
		
	});

	$.index.open();
}

