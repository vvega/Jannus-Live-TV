exports.definition = {
    config : {
    	columns: {
            episode : "INTEGER",
            title : "TEXT",
            url : "TEXT",
            uploaded : "TEXT",
            duration : "INTEGER",
            description : "TEXT"
        },
        adapter: {
            type: "restapi",
            collection_name: "video"
        }
    },

    extendModel: function(Model) {		
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model 
       		 url: function() {
            	return  Alloy.CFG.app_url + "test.json";
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
            	return  Alloy.CFG.app_url + "test.json";
            },
            
            parse: function(_resp, xhr) {
            	
            	//customize parse function to analyze error_code, video_count, and the videos array
            	var videos = [];
				var count = _resp.video_count;
				
				for(var i = 1; i <= count; i++) {
					
					var video = _resp.videos[i];
					videos.push({
						 "episode": video.episode,
				         "title": video.title,
				         "url": video.url,
				         "uploaded": video.uploaded,
				         "duration": video.duration,
				         "description": video.description
					});
				}

            	return videos;
            }
        });
		
        return Collection;
    }
};