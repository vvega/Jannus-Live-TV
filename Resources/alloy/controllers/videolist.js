function Controller() {
    function __alloyId37() {
        var opts = __alloyId37.opts || {};
        var models = __alloyId36.models;
        var len = models.length;
        var __alloyId30 = [];
        for (var i = 0; len > i; i++) {
            var __alloyId33 = models[i];
            __alloyId33.__transform = {};
            var __alloyId35 = Alloy.createController("videoitem", {
                $model: __alloyId33
            });
            __alloyId30.push(__alloyId35.getViewEx({
                recurse: true
            }));
        }
        opts.animation ? $.__views.videolistview.setItems(__alloyId30, opts.animation) : $.__views.videolistview.setItems(__alloyId30);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "videolist";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    Alloy.Collections.instance("video");
    $.__views.videolist = Ti.UI.createWindow({
        navBarHidden: "true",
        orientation: Ti.UI.PORTRAIT,
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "black",
        backgroundImage: "/images/background.png",
        id: "videolist"
    });
    $.__views.videolist && $.addTopLevelView($.__views.videolist);
    $.__views.__alloyId27 = Ti.UI.createView({
        height: "75dp",
        layout: "vertical",
        width: Ti.UI.FILL,
        backgroundColor: "#A50",
        id: "__alloyId27"
    });
    $.__views.videolist.add($.__views.__alloyId27);
    var __alloyId29 = [];
    var __alloyId32 = [];
    $.__views.videolistview = Ti.UI.createListSection({
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "#555",
        id: "videolistview",
        onclick: "viewVideo"
    });
    __alloyId29.push($.__views.videolistview);
    $.__views.videolistview.items = __alloyId32;
    var __alloyId36 = Alloy.Collections["videos"] || videos;
    __alloyId36.on("fetch destroy change add remove reset", __alloyId37);
    $.__views.__alloyId28 = Ti.UI.createListView({
        sections: __alloyId29,
        id: "__alloyId28"
    });
    $.__views.videolist.add($.__views.__alloyId28);
    exports.destroy = function() {
        __alloyId36.off("fetch destroy change add remove reset", __alloyId37);
    };
    _.extend($, $.__views);
    exports.populateList = function() {
        Alloy.Collections.videos.fetch({
            success: function() {
                $.videolist.open();
            },
            error: function(model, resp) {
                Ti.API.info("ERR:" + resp);
            }
        });
    };
    $.videolist.addEventListener("open", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;