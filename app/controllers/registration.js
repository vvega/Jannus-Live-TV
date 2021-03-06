//orientation fix
$.registration.orientationModes=[Titanium.UI.PORTRAIT];

function confirmDialog() {
	var confirm = Titanium.UI.createAlertDialog({
        title: 'Success!',
        message: 'You have successfully registered! Please log in.',
        buttonNames: ['OK']
	});
	confirm.addEventListener('click', function(e){
  		  $.registration.close();	
    });
  	confirm.show();
}
function populateDropdown(dropdown, collection) {
	
	//assign values to dropdown
	for(var i = 0; i < collection.length; i++) {
		dropdown.add(Ti.UI.createPickerRow({title: collection.at(i).get('text'), value: collection.at(i).get('value')}));
	}
}

function populateCheckboxes(view, collection) {
		
	//assign values to checkboxes
	for(var i = 0; i < collection.length; i++) {
		view.add(Ti.UI.createSwitch({titleOn: collection.at(i).get('text'),
										 titleOff: collection.at(i).get('text'),
										 title: collection.at(i).get('text'),
										 switchvalue: collection.at(i).get('value'),
										 style: Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
										 width: "120dp"}));
	}
}

function setDropdownListener(picker, valueForChange, hiddenView) {
	
	//account for picker bug
	 picker.setSelectedRow(0, 1, false);
 	 picker.setSelectedRow(0, 0, false);
	
	//set textfield visibility based on current picker selection
	picker.addEventListener("change", function() {
		var pickerValue = picker.getSelectedRow(0).value;
		
		if(pickerValue == valueForChange) {
			hiddenView.setVisible(true);
			hiddenView.setHeight("60dp");
		} else {
			hiddenView.setVisible(false);
			hiddenView.setHeight("0");
		}
	});
}
function submitRegistration() {
	
	var genres_list = "";
		
	for(var i in $.genres.children) {
		if($.genres.children[i].value) {

			genres_list += $.genres.children[i].switchvalue + ",";
		}
	}
	//trim last comma off
	genres_list = genres_list.substring(0, genres_list.length - 1);
	
	//build parameter JSON object 
    var params = {
    	username : $.username_register.getValue(), 
    	password : $.password_register.getValue(),
    	passwordMatch : $.passwordMatch.getValue(),
    	email : $.email.getValue(),
    	emailMatch : $.emailMatch.getValue(),
    	firstname : $.firstname.getValue(),
    	lastname : $.lastname.getValue(),
    	zip : parseInt($.zip.getValue()),
    	country : $.countryPicker.getSelectedRow(0).title,
    	gender : $.gender.getSelectedRow(0).value,
    	age_group : $.agegroupPicker.getSelectedRow(0).value,
    	preferred_genres : genres_list,
    	refer_type : $.referralPicker.getSelectedRow(0).value,
    	refer_custom : $.other.getValue()
    };
	
	
	var registerController = Alloy.createController('register');
	registerController.doRegistration(params, function(result) {
		
		if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
		
		if(result.message == Alloy.Globals.SUCCESS) {
			confirmDialog();
		}		
	});
}

exports.goToRegistration = function() {	

	$.registration.open();
};

/*////////////////////
 *  WINDOW LISTENERS
 *////////////////////
$.registration.addEventListener("open", function() {
	
	Alloy.Globals.progress.setMessage(Ti.Locale.getString('loading_form'));	
	if(Alloy.Globals.progress) { Alloy.Globals.progress.show(); }
	
	//initialize this view in the event it has not been accessed/prepared before
	populateDropdown($.countryPicker, Alloy.Collections.countries);
	populateDropdown($.agegroupPicker, Alloy.Collections.agegroups);
	populateDropdown($.referralPicker, Alloy.Collections.referraltypes);
	populateCheckboxes($.genres, Alloy.Collections.genres);
	setDropdownListener($.countryPicker, "US", $.zip);
    setDropdownListener($.referralPicker, 9, $.other);
	
	if(Alloy.Globals.progress) { Alloy.Globals.progress.hide(); }
});
$.registration.addEventListener("close", function() {
	//clean data binding to prevent memory leaks
	$.destroy();
});
$.registration.addEventListener("android:back", function() {
	$.registration.close();
});
