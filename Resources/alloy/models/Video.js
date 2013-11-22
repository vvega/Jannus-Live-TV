exports.definition = {
    config: {
        columns: {
            episode: "INTEGER",
            title: "TEXT",
            url: "TEXT",
            uploaded: "TEXT",
            duration: "INTEGER",
            description: "TEXT"
        },
        adapter: {
            type: "restapi",
            collection_name: "video"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            url: function() {
                return Alloy.CFG.app_url + "test.json";
            },
            parse: function(_resp) {
                return _resp;
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            url: function() {
                return Alloy.CFG.app_url + "test.json";
            },
            parse: function(_resp) {
                var videos = [];
                var count = _resp.video_count;
                for (var i = 1; count >= i; i++) {
                    var video = _resp.videos[i];
                    videos.push({
                        episode: video.episode,
                        title: video.title,
                        url: video.url,
                        uploaded: video.uploaded,
                        duration: video.duration,
                        description: video.description
                    });
                }
                return videos;
            }
        });
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("video", exports.definition, []);

collection = Alloy.C("video", exports.definition, model);

exports.Model = model;

exports.Collection = collection;