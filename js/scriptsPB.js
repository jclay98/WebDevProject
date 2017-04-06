//Jenine Clay, jclay@andrew.cmu.edu, Web Development Project 67-250
// Javascript Document

function showDescription(descript){
	$("#description").html("Description: " + descript)
}

function hideDescription(){
	$("#description").html("")
}

function validate(){
	var txtDob = $("#txtDate").val();
	var dob = new Date(txtDob);
	if (dob > = new Date()){
		alert ("Date is not valid, must be before today.");
		return false;
	}
	var x = $("#txtZip").val();
	var num = ;
	if (isNaN(num) || num <= 10000 || num >= 99999){
		alert("Zip Code number is not valid or not in valid form.");
		return false;
	}
}