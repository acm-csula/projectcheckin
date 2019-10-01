var db = firebase.firestore();

function spaceinvaders(){

	var spaceinvadersCIN = document.getElementById("spaceInvadersMemberCIN").value;
	var spaceInvadersName = document.getElementById("spaceInvadersMemberName").value;
	// var spaceInvadersSecretCode = document.getElementById("spaceInvadersSecretCode").value;

	if(spaceInvadersName.length && spaceinvadersCIN.length != 0){
		db.collection("Space Invaders").doc().set({
			name:spaceInvadersName,
			cin:spaceinvadersCIN,
			// code:spaceInvadersSecretCode
		})
		.then(function(docRef) {
			window.alert("Check In Successful")
		})	
	}
	else{
		window.alert("All fields are required")
	}
}

function accord(){
	var accordMemberCIN = document.getElementById("accordMemberCIN").value;
	var accordMemberName = document.getElementById("accordMemberName").value;
	// var accordSecretCode = document.getElementById("accordSecretCode").value;

	if(accordMemberName.length && accordMemberCIN != 0){
		db.collection("Accord").doc().set({
			name:accordMemberName,
			cin:accordMemberCIN,
			// code:accordSecretCode
		})
		.then(function(docRef) {
			window.alert("Check In Successful")
		})
	}
	else{
		window.alert("All fields are required")
	}
}