function Controller() {
    function populateDropdown(dropdown, collection) {
        for (var i = 0; collection.length > i; i++) dropdown.add(Ti.UI.createPickerRow({
            title: collection.at(i).get("text"),
            value: collection.at(i).get("value")
        }));
        collection.reset();
    }
    function populateCheckboxes(view, collection) {
        for (var i = 0; collection.length > i; i++) view.add(Ti.UI.createSwitch({
            titleOn: collection.at(i).get("text"),
            titleOff: collection.at(i).get("text"),
            title: collection.at(i).get("text"),
            value: collection.at(i).get("value"),
            style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
            width: "120dp"
        }));
        collection.reset();
    }
    function createCollectionFromLocalJSON(model, jsonFile) {
        var fileName = (Ti.Locale.getString("localdata_path") + jsonFile + ".json").toString();
        var dataFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
        return Alloy.createCollection(model, JSON.parse(dataFile.read().text));
    }
    function setReferralListener() {
        $.referralPicker.addEventListener("change", function() {
            if (9 == parseInt($.referralPicker.getSelectedRow(0).value)) {
                $.other.setVisible(true);
                $.other.setHeight("60dp");
            } else {
                $.other.setVisible(false);
                $.other.setHeight("0");
            }
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "register";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.register = Ti.UI.createWindow({
        navBarHidden: "true",
        orientation: Ti.UI.PORTRAIT,
        layout: "vertical",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        backgroundColor: "black",
        backgroundImage: "/images/background.png",
        id: "register"
    });
    $.__views.register && $.addTopLevelView($.__views.register);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: "75dp",
        layout: "vertical",
        width: Ti.UI.FILL,
        backgroundColor: "#A50",
        id: "__alloyId3"
    });
    $.__views.register.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontSize: "24dp"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        left: "10dp",
        textid: "account_creation",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createScrollView({
        id: "__alloyId5"
    });
    $.__views.register.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "enter_username",
        id: "__alloyId7"
    });
    $.__views.__alloyId6.add($.__views.__alloyId7);
    $.__views.username = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "username"
    });
    $.__views.__alloyId6.add($.__views.username);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "enter_password",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.password = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "password"
    });
    $.__views.__alloyId6.add($.__views.password);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "confirm_password",
        id: "__alloyId9"
    });
    $.__views.__alloyId6.add($.__views.__alloyId9);
    $.__views.passwordMatch = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "passwordMatch"
    });
    $.__views.__alloyId6.add($.__views.passwordMatch);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "enter_email",
        id: "__alloyId10"
    });
    $.__views.__alloyId6.add($.__views.__alloyId10);
    $.__views.email = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "email"
    });
    $.__views.__alloyId6.add($.__views.email);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "confirm_email",
        id: "__alloyId11"
    });
    $.__views.__alloyId6.add($.__views.__alloyId11);
    $.__views.emailMatch = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "emailMatch"
    });
    $.__views.__alloyId6.add($.__views.emailMatch);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        font: {
            fontSize: "22dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        left: "10dp",
        textid: "other_info",
        id: "__alloyId12"
    });
    $.__views.__alloyId6.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "first_name",
        id: "__alloyId13"
    });
    $.__views.__alloyId6.add($.__views.__alloyId13);
    $.__views.firstname = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "firstname"
    });
    $.__views.__alloyId6.add($.__views.firstname);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "last_name",
        id: "__alloyId14"
    });
    $.__views.__alloyId6.add($.__views.__alloyId14);
    $.__views.last_name = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "last_name"
    });
    $.__views.__alloyId6.add($.__views.last_name);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "zip_code",
        id: "__alloyId15"
    });
    $.__views.__alloyId6.add($.__views.__alloyId15);
    $.__views.zip = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "60dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "zip"
    });
    $.__views.__alloyId6.add($.__views.zip);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "country_label",
        id: "__alloyId16"
    });
    $.__views.__alloyId6.add($.__views.__alloyId16);
    $.__views.countryPicker = Ti.UI.createPicker({
        width: Ti.UI.FILL,
        id: "countryPicker"
    });
    $.__views.__alloyId6.add($.__views.countryPicker);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "gender_label",
        id: "__alloyId18"
    });
    $.__views.__alloyId6.add($.__views.__alloyId18);
    var __alloyId19 = [];
    $.__views.gender = Ti.UI.createPicker({
        width: Ti.UI.FILL,
        id: "gender"
    });
    $.__views.__alloyId6.add($.__views.gender);
    $.__views.m = Ti.UI.createPickerRow({
        id: "m",
        value: "m",
        title: "Male"
    });
    __alloyId19.push($.__views.m);
    $.__views.f = Ti.UI.createPickerRow({
        id: "f",
        value: "f",
        title: "Female"
    });
    __alloyId19.push($.__views.f);
    $.__views.gender.add(__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "agegroup_label",
        id: "__alloyId20"
    });
    $.__views.__alloyId6.add($.__views.__alloyId20);
    $.__views.agegroupPicker = Ti.UI.createPicker({
        width: Ti.UI.FILL,
        id: "agegroupPicker"
    });
    $.__views.__alloyId6.add($.__views.agegroupPicker);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "preferred_genres",
        id: "__alloyId22"
    });
    $.__views.__alloyId6.add($.__views.__alloyId22);
    $.__views.genres = Ti.UI.createView({
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "genres"
    });
    $.__views.__alloyId6.add($.__views.genres);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: "18dp",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: "10dp",
        textid: "referral_label",
        id: "__alloyId23"
    });
    $.__views.__alloyId6.add($.__views.__alloyId23);
    $.__views.referralPicker = Ti.UI.createPicker({
        width: Ti.UI.FILL,
        id: "referralPicker"
    });
    $.__views.__alloyId6.add($.__views.referralPicker);
    $.__views.other = Ti.UI.createTextField({
        width: Ti.UI.FILL,
        height: "0",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        visible: false,
        id: "other"
    });
    $.__views.__alloyId6.add($.__views.other);
    $.__views.registration_submit = Ti.UI.createButton({
        width: Ti.UI.FILL,
        height: "68dp",
        top: "10dp",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "registration_submit",
        titleid: "registration_submit"
    });
    $.__views.__alloyId6.add($.__views.registration_submit);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var viewInitialized = false;
    exports.doRegistration = function() {};
    $.register.addEventListener("open", function() {
        if (!viewInitialized) {
            populateDropdown($.countryPicker, createCollectionFromLocalJSON("surveydata", "countries"));
            populateDropdown($.agegroupPicker, createCollectionFromLocalJSON("surveydata", "agegroups"));
            populateDropdown($.referralPicker, createCollectionFromLocalJSON("surveydata", "referraltypes"));
            populateCheckboxes($.genres, createCollectionFromLocalJSON("surveydata", "genres"));
            setReferralListener();
            viewInitialized = true;
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;