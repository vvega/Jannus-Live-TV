var args=arguments[0]||{};  
if(args.$model){  
	 var dataJson=args.$model.toJSON();  
}

/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
$.videoview.addEventListener("open", function() {

	if(Alloy.Globals.progress) {
		
		Alloy.Globals.progress.setMessage(Ti.Locale.getString("loading_episode"));
		Alloy.Globals.progress.show();
		
		$.video_player.addEventListener("loadstate", function() {
			
			if($.video_player){
				if($.video_player.getLoadState() != 1) {
					Alloy.Globals.progress.show();
				} else {
					if(Alloy.Globals.progress) {
						Alloy.Globals.progress.setCancelable(false);
						Alloy.Globals.progress.hide();
					}
					$.video_player.setMediaControlStyle(Ti.Media.VIDEO_CONTROL_EMBEDDED);
				}
			}
		});
	}	
	if (Ti.Platform.osname == 'android'){
		
   		Ti.Gesture.addEventListener('orientationchange', function(e) {
 			
 			if(Ti.Gesture.orientation == Ti.UI.LANDSCAPE_LEFT) {
		
				$.videoview.setFullscreen(true); 	
				
 				//hide other elements
 				$.video_header.hide();
 				$.video_details.hide();
 				$.video_title.hide();
 				
 				$.video_header.setHeight(0);
 				$.video_details.setHeight(0);
 				$.video_title.applyProperties({
 					height: 0,
 					top: "0",
 					bottom: "0"
 				});
 							
 				$.video_player.setWidth(Ti.UI.FILL);
 				$.video_player.setHeight(Ti.UI.FILL); 		
 				
 			} else if(Ti.Gesture.orientation == Ti.UI.PORTRAIT) {
 				
 				$.videoview.setFullscreen(false);
 				 				
 				$.video_player.setWidth(Ti.UI.FILL);
 				$.video_player.setHeight(Alloy.Globals.styles.portrait_video_height);				
 				
 				//show other elements
 				$.video_header.show();
 				$.video_details.show();
 				$.video_title.show();
 				
 				$.video_header.setHeight(Alloy.Globals.styles.header_height);
 				$.video_details.setHeight("auto");
 				$.video_title.applyProperties({
 					height: "auto",
 					top: Alloy.Globals.styles.standard_margin,
 					bottom: Alloy.Globals.styles.standard_margin
 				});
 				
 			}
        });
   } else if (Ti.Platform.osname == 'ios') {
   		//TODO: create custom ios functionality  	
   }
});
$.videoview.addEventListener("close", function() {
	//clean data binding to prevent memory leaks
});
$.videoview.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
	$.videoview.close();
});
