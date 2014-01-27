exports.sendData = function(endpoint, data, callback) {
	if(Alloy.Globals.progress) {
		Alloy.Globals.progress.show();
	}
	 
	var url = Alloy.CFG.app_url + endpoint;
	//Ti.API.info("url: "+ url);
	 
	var client = Ti.Network.createHTTPClient({
	     
	     //on successful load of data
	     onload : function(e) {

	        var data = JSON.parse(this.responseData);
	        var callback_value = Alloy.Globals.SUCCESS;
	        
	        //Ti.API.info("data: "+JSON.stringify(data));

	        if(data.error_type != 0) {
				
				callback_value = Alloy.Globals.FAILURE;
				
	        	var errorString = "Error:\n\n";
	        	
	        	switch(data.error_type) {
	        		case 1:
	        		case 2:
	        		case 4:
	        			if(data.email_valid_error) {
	        				errorString += "> "+ data.email_valid_error + "\n";
	        			} else {
	        				errorString += "Remote server error. Please try again later.";
	        			}	  
	        			alert(errorString);	    
	        			break;   			
	        		case 3:	        			
	        		    if(data.username_error) {
	        		    	errorString += "> "+ data.username_error + "\n";
	        		    }
	        		   	if(data.password_match_error) {
	        		    	//show reset dialog
	        		    	callback_value = Alloy.Globals.PASSWORD_FAILURE;
	        		    	break;
	        		    }
	        		   	if(data.password_error) {
	        		    	errorString += "> "+ data.password_error + "\n";
	        		    }
	        		    if(data.account_error) {
	        		    	errorString += "> "+ data.account_error + "\n";
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
	        		    if(data.firstname_error) {
	        		    	errorString += "> "+ data.firstname_error + "\n";
	        		    }
	        		    if(data.lastname_error) {
	        		    	errorString += "> "+ data.lastname_error + "\n";
	        		    }	     
	        		    alert(errorString);	    	
	        			break;
	        		default:
	        			break;
	        	}      		           	
	        } 
	        	
	       callback(callback_value);	        
	        
	       if(Alloy.Globals.progress) {
				try{ Alloy.Globals.progress.hide(); } catch(error) {};
			}
			        
	        return;
	     },
	     
	     //error loading page
	     onerror : function(e) {

			 alert("Error:\n\nUnable to connect to server.");
	         callback(false);
	         if(Alloy.Globals.progress) {
	         	Alloy.Globals.progress.hide();
	         }
	     },
	     timeout : 5000  // in milliseconds
	 });

	 // Prepare the connection.
	 client.open("POST", url);
	 client.send(data);
};