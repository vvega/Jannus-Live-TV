//orientation fix
$.videolist.orientationModes=[Titanium.UI.PORTRAIT];

var listItemData = [];

function viewVideo(e) {	
	 Ti.API.info("Clicked: "+JSON.stringify(e.section.getItemAt(e.itemIndex)));
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

/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
$.videolist.addEventListener("open", function() {
	
	if(Alloy.Globals.progress) {
		try{ Alloy.Globals.progress.hide(); } catch(error) {};
	}
});
$.videolist.addEventListener("close", function() {
	//clean data binding to prevent memory leaks
   $.destroy();
});
$.videolist.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
});

