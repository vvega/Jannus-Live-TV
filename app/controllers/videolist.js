//orientation fix
$.videolist.orientationModes=[Titanium.UI.PORTRAIT];

function viewVideo(e) {	

	//create videoview.xml with details based upon selected model
 	if (e.section.getItemAt(e.itemIndex).model) {  
 	  //obtain corresponding model from the video collection and pass it into the view
	  var detailObj=Alloy.Collections.videos.get(e.section.getItemAt(e.itemIndex).model.id);  
	  var win=Alloy.createController('videoview',{"$model":detailObj});  
	  win.getView().open();  
  } 
}

function Logout() {
	Alloy.Globals.sessionMgr.endSession();
	$.videolist.close();
	Ti.Android.currentActivity.finish();
}

exports.populateList = function() {

	Alloy.Globals.progress.setMessage(Ti.Locale.getString('loading_list'));  
   
   //".fetch()" populates the collection via the structure/adapter specified within the video model
   Alloy.Collections.videos.fetch({
   	 
	    success : function(model, resp) {
	      $.videolist.open();
		},
		
	    error : function(model, resp) {

	        alert("Error loading video list. Please try again later.");
	        
	    }
	});
	
};
$.logout.addEventListener('touchstart', function(){
	this.setBackgroundGradient(null);
    this.setBackgroundColor('#cccccc');
 });
$.logout.addEventListener('touchend', function(){
	this.setBackgroundGradient(Alloy.Globals.styles.jannus_gradient);
 });
/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
$.videolist.addEventListener("open", function() {
	if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
});
$.videolist.addEventListener("close", function() {
	//clean data binding to prevent memory leaks
});
$.videolist.addEventListener("android:back", function() {
	//"home" button functionality. Leave app runnning in background.
	var intent = Ti.Android.createIntent({
        action: Ti.Android.ACTION_MAIN
    });
    intent.addCategory(Ti.Android.CATEGORY_HOME);
    Ti.Android.currentActivity.startActivity(intent);
});