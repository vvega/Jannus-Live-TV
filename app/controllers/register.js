var viewInitialized = false;

function populateDropdown(dropdown, collection) {
	
	//assign values to dropdown
	for(var i = 0; i < collection.length; i++) {
		dropdown.add(Ti.UI.createPickerRow({title: collection.at(i).get('text'), value: collection.at(i).get('value')}));
	}
	
	collection.reset();
}

function populateCheckboxes(view, collection) {
		
	//assign values to checkboxes
	for(var i = 0; i < collection.length; i++) {
		view.add(Ti.UI.createSwitch({titleOn: collection.at(i).get('text'),
										 titleOff: collection.at(i).get('text'),
										 title: collection.at(i).get('text'),
										 value: collection.at(i).get('value'),
										 style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
										 width: "120dp"}));
	}
	
	collection.reset();
}

function createCollectionFromLocalJSON(model, jsonFile) {
	
	//read json filedata 
	var fileName = (Ti.Locale.getString("localdata_path") + jsonFile + ".json").toString();
	var dataFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName);
	
	//create and return a collection of specified model types populated with parsed JSON data
	return Alloy.createCollection(model, JSON.parse(dataFile.read().text));
}

function setReferralListener() {
	
	//set "Other" textfield visibility based on current picker selection
	$.referralPicker.addEventListener("change", function() {
		if(parseInt($.referralPicker.getSelectedRow(0).value) == 9) {
			$.other.setVisible(true);
			$.other.setHeight("60dp");
		} else {
			$.other.setVisible(false);
			$.other.setHeight("0");
		}
	});
}

exports.doRegistration = function(firstname, lastname, zip, country, gender, genres, refer_type) {
		
	/*$.registration_submit.addEventListener("click", function(e) {
		/* firstname, lastname, zip, country, gender, age_group, preferred_genres,
	                  refer_type, refer_custom, register_ip 
		var firstname, lastname, zip, country, gender, age_group, preferred_genres, refer_type, refer_custom, register_ip;
	});*/
};

$.register.addEventListener("open", function() {
		
	//initialize this view in the event it has not been accessed/prepared before
	if(!viewInitialized) {		
		populateDropdown($.countryPicker, createCollectionFromLocalJSON("surveydata", "countries"));
		populateDropdown($.agegroupPicker, createCollectionFromLocalJSON("surveydata", "agegroups"));
		populateDropdown($.referralPicker, createCollectionFromLocalJSON("surveydata", "referraltypes"));
		populateCheckboxes($.genres, createCollectionFromLocalJSON("surveydata", "genres"));
		setReferralListener();
		viewInitialized = true;
	}
});


 
