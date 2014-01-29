var args=arguments[0]||{};  
if(args.$model){  
	 var dataJson=args.$model.toJSON();  
}
var dialogTimeout = null;
/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
$.videoview.addEventListener("open", function() {
	
		//adjust favorites button
	/*	var favorite_margin = -(parseInt(Alloy.Globals.styles.header_icon_height) + 
									Alloy.Globals.styles.standard_margin + 5);
		$.favorite.setTop(favorite_margin);*/
		
		$.quality.addEventListener("change", function() {
			
			if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }
			timeoutDialog();
			
			var time = 	$.video_player.getCurrentPlaybackTime();
			$.video_player.stop();
			$.video_player.release();
			
			if($.quality.getValue() && dataJson.url_vid_hi != "") {
				//get hi-res if available
				$.video_player.setUrl(dataJson.url_vid_hi);
			} else {
				//get lo-res
				$.video_player.setUrl(dataJson.url_vid);
			}
	
			$.video_player.play();				
			$.video_player.setCurrentPlaybackTime(time);
			
		}); 
		
	
		//initial video loading dialog
		Alloy.Globals.progress.setMessage(Ti.Locale.getString("loading_episode"));
		if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }
		timeoutDialog();
		
		$.video_player.addEventListener("loadstate", function() {
			
			if($.video_player){
				if($.video_player.getLoadState() != 1) {
					if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }
				} else {
					if(Alloy.Globals.progress) {
						Alloy.Globals.progress.setCancelable(false);
						if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
					}
					$.video_player.setMediaControlStyle(Ti.Media.VIDEO_CONTROL_EMBEDDED);
				}
			}
		});
		
		
		//increment remote viewcount
		Alloy.Globals.ajaxClient.sendData(Alloy.CFG.userdata_path, {
			video_id : dataJson.id,
			session_id : Ti.App.Properties.getString('session_id')
		}, null);
			
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
function timeoutDialog() {
	dialogTimeout = setTimeout(function(){
		if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
	}, 10000);
}
$.videoview.addEventListener("close", function() {
	//clean data binding to prevent memory leaks
	if(dialogTimeout) {
		clearTimeout(dialogTimeout);
	}
});
$.videoview.addEventListener("android:back", function() {
	//clean data binding to prevent memory leaks
	$.video_player.stop();
	$.video_player.release();
	$.videoview.close();
	$.destroy();
});
