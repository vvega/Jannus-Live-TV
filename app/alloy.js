// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/*//////////////////////
 *  Global Collections
 *//////////////////////
Alloy.Collections.videos = Alloy.createCollection('video');

/*//////////////////
 *  Global Values
 *//////////////////
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
Ti.App.SCREEN_WIDTH = (pWidth > pHeight) ? pHeight : pWidth;
Ti.App.SCREEN_HEIGHT = (pWidth > pHeight) ? pWidth : pHeight;
Alloy.Globals.initialized = false;

Alloy.Globals.max_description_chars = 91;

/*//////////////////
 *  Global Styles
 *//////////////////
Alloy.Globals.styles = {
	logo_height: parseInt(Ti.App.SCREEN_HEIGHT/2) - 40,
	label_height: "20dp",
	textfield_height: "60dp",
	button_height: "60dp",
	header_height: "55dp",
	standard_margin: parseInt(Ti.App.SCREEN_WIDTH/30),
	entry_fields_width: Ti.App.SCREEN_WIDTH - 30,
	textfield_bg_color: "#120d01",
	textfield_border_color: "#b77d0c",
	textfield_text_color: "#FFF",
	textfield_border_width: 3,
	portrait_video_width: Ti.App.SCREEN_WIDTH,
	portrait_video_height: parseInt((Ti.App.SCREEN_WIDTH * 9)/16) + 40,
	listitem_height: "110dp",
	listitem_description_width: Ti.App.SCREEN_WIDTH/2 - 10,
	button_font: {fontSize: "30dp", fontWeight: "bold"},
	title_font: {fontSize: "25dp", fontWeight: "bold"},
	subtitle_font: {fontSize: "20dp", fontweight: "bold"},
	jannus_gradient: {
		type:'linear',
		colors:['#ffbf0f','#b53513'],
		startPoint:{x:0,y:0},
		endPoint:{x:0,y:130},
	}
};

/*//////////////////
 *  Android Only
 *//////////////////
Alloy.Globals.progress = Ti.UI.Android.createProgressIndicator({
	  message: Ti.Locale.getString('loading'),
	  location: Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
	  type: Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT,
	  cancelable: false,
	  bubbleParent: false
	});

/*//////////////////////////////////////////////////////////////////
 *  Global Controllers (must be initialized after all other values)
 *//////////////////////////////////////////////////////////////////
Alloy.Globals.sessionMgr = Alloy.createController("session");
Alloy.Globals.ajaxClient = Alloy.createController("post");