exports.definition = {
    config : {
    	columns: {
    		id : "INTEGER",
            episode : "INTEGER",
            title : "TEXT",
            url_vid : "TEXT",
            url_vid_hi : "TEXT",
            url_thumb : "TEXT",
            uploaded : "TEXT",
            duration : "INTEGER",
            description : "TEXT"
        },
        adapter: {
            type: "restapi",
            collection_name: "video",
            idAttribute : "id"
        }
    },

    extendModel: function(Model) {		
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model 
       		 url: function() {
       		 	
            	return Alloy.CFG.app_url + Alloy.CFG.videolist_path;
            },
            
            parse: function(_resp, xhr) {
            	        	
            	return _resp;
            }
        });
        return Model;
    },

    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
        	
            // Extend, override or implement Backbone.Collection 
            url: function() {

            	return Alloy.CFG.app_url + Alloy.CFG.videolist_path;
            },
            
            parse: function(_resp, xhr) {
            	
            	//customize parse function to analyze error_code, video_count, and the videos array
	            if(_resp) {
	            	var videos = [];
					var count = _resp.video_count;
	
					for(var i = 0; i < count; i++) {					
						
						var video = _resp.videos[i];
	
						videos.push({
							 "id" : video.id,
							 "episode" : (video.episode).toString(),
					         "title" : video.title ,
					         "url_vid" : "http://" + video.url + Alloy.CFG.vid_append,
					         "url_vid_hi" : "http://" + video.url + Alloy.CFG.vid_hi_append,
					         "url_thumb" : "http://" + video.url + Alloy.CFG.thumb_append,
					         "uploaded" : video.uploaded,
					         "duration" : prepareDuration(video.duration),
					         "description" : video.description,
					         "description_truncated" : truncateDescription(video.description) 
						});
					}
					
	            	return videos;
	            	
	            } else
	            {
	            	return {};
	            }
	            	
            }
        });
		
        return Collection;
    }
};
function truncateDescription(descr) {
	if(descr.length >= Alloy.Globals.max_description_chars) {
		descr = descr.substring(0, Alloy.Globals.max_description_chars - 3);
		descr += "...";
	}
	return descr;
}
function prepareDuration(duration) {
	
	var minutes = Math.floor(duration / 60);
	var seconds = duration % 60;
	
	return (seconds >= 10) ? minutes+":"+seconds : minutes+":0"+seconds;
}
