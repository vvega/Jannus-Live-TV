exports.definition = {
    config: {
        columns: {
            text: "TEXT",
            value: "TEXT"
        },
        defaults: {
            text: "",
            value: ""
        },
        adapter: {
            type: "properties",
            collection_name: "surveydata"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("surveydata", exports.definition, []);

collection = Alloy.C("surveydata", exports.definition, model);

exports.Model = model;

exports.Collection = collection;