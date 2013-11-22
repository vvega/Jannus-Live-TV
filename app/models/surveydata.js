exports.definition = {
    config : {
    	"columns": {
            "text": "TEXT",
            "value": "TEXT"
        },
        "defaults": {
            "text": "",
            "value": ""
        },
        "adapter": {
            "type": "properties",
            "collection_name": "surveydata"
        }
    },

    extendModel: function(Model) {		
        _.extend(Model.prototype, {
            // Extend, override or implement Backbone.Model 
        });
		
        return Model;
    },

    extendCollection: function(Collection) {		
        _.extend(Collection.prototype, {
            // Extend, override or implement Backbone.Collection 
        });
		
        return Collection;
    }
};