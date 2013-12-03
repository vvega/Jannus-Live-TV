exports.sendData = function(endpoint, data, callback) {
	
	Alloy.Globals.progress.show();
	 
	var url = Alloy.CFG.app_url + endpoint;
	Ti.API.info("url: "+ url);
	 
	var client = Ti.Network.createHTTPClient({
	     
	     //on successful load of data
	     onload : function(e) {

	        var data = JSON.parse(this.responseData);
	        Ti.API.info("data: "+JSON.stringify(data));

	        if(data.error_type != 0) {
	        	Ti.API.info("ERROR!!");
	        	var error_message = "";
	        	switch(data.error_type) {
	        		case 1:
	        		case 2:
	        		case 4:
	        			alert("Error:\n\nRemote server error. Please try again later.");
	        			break;
	        		case 3:
	        			var errorString = "Error:\n\n";
	      
	        		    if(data.username_error) {
	        		    	errorString += "> "+ data.username_error + "\n";
	        		    }
	        		    if(data.password_error) {
	        		    	errorString += "> "+ data.password_error + "\n";
	        		    }
	        		    if(data.email_error) {
	        		    	errorString += "> "+ data.email_error + "\n";
	        		    }
	        		    if(data.preferred_genres_error) {
	        		    	errorString += "> "+ data.preferred_genres_error + "\n";
	        		    }
	        		    if(data.zip_error) {
	        		    	errorString += "> "+ data.zip_error + "\n";
	        		    }
	        			alert(errorString);
	        			break;
	        		default:
	        			break;
	        	}
	        	
	        	callback(false);
	        	
	        } else {
	        	
	        	callback(true);
	        	
	        }
	        
	       if(Alloy.Globals.progress) {
				try{ Alloy.Globals.progress.hide(); } catch(error) {};
			}
			        
	        return;
	     },
	     
	     //error loading page
	     onerror : function(e) {

			 alert("Error:\n\nUnable to connect to server.");
	         callback(false);
	         Alloy.Globals.progress.hide();
	     },
	     timeout : 5000  // in milliseconds
	 });

	 // Prepare the connection.
	 client.open("POST", url);
	 client.send(data);
};