function handleReset() {
	//reset password
	Alloy.Globals.progress.setMessage(Ti.Locale.getString('checking_email'));
	Alloy.Globals.ajaxClient.sendData(Alloy.CFG.reset_password_path, {email: $.reset_email.getValue()}, 
		function(result) {
			
			if(result) {
				alert("Email sent with reset link.");
			} 
			
			Alloy.Globals.progress.hide();
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

