function handleReset() {
	//reset password
	Alloy.Globals.progress.setMessage(Ti.Locale.getString('checking_email'));
	if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }
	 
	Alloy.Globals.ajaxClient.sendData(Alloy.CFG.reset_password_path, {email: $.reset_email.getValue()}, 
		function(result) {
			
			if(result.message) {
				alert("Email sent with reset link.");
			} 
			
			if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
			$.alert_dialog.close();	
		}
	);
}
function closeWindow() {
	$.alertdialog.close();
}
exports.showDialog = function() {
	$.alertdialog.open();
};

