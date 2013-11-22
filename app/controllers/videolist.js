function viewVideo(e) {
 /*	if (e.row.model) {  
	  //alert(e.row.model);  
	  var detailObj=Alloy.Collections.video.get(e.row.model);  
	  var win=Alloy.createController('videoview',{"$model":detailObj});  
	  win.getView().open();  
  }  */
}
exports.populateList = function() {

   Alloy.Collections.videos.fetch({
	    success : function(model, resp) {
	      $.videolist.open();
		},
	    error : function(model, resp) {

	        Ti.API.info("ERR:" +resp);
	    }
	});
	
};

$.videolist.addEventListener("open", function() {

});

