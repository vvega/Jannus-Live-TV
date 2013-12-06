if(Alloy.Globals.sessionMgr.sessionExists()) {	
	
	//go to video list if active session exists
	var videoListMgr = Alloy.createController("videolist");
	videoListMgr.populateList();
	
} else if(!Alloy.Globals.initialized) {
	
	var loginPage = Alloy.createController("loginpage");
	loginPage.getView().open();
	Alloy.Globals.initialized = true;
}
