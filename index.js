var db = firebase.firestore();

function spaceinvaders(){

	var spaceinvadersCIN = document.getElementById("spaceInvadersMemberCIN").value;
	var spaceInvadersName = document.getElementById("spaceInvadersMemberName").value;

	db.collection("Space Invaders").doc().set({
		name:spaceInvadersName,
		cin:spaceinvadersCIN
	})
	.then(function(docRef) {
		window.alert("Check In Successful")
	})
	.catch(function(error) {
		window.alert("Please try again")
	});
}

function accord(){
	var accordMemberCIN = document.getElementById("accordMemberCIN").value;
	var accordMemberName = document.getElementById("accordMemberName").value;
	
	db.collection("Accord").doc().set({
		name:accordMemberName,
		cin:accordMemberCIN
	})
	.then(function(docRef) {
		window.alert("Check In Successful")
	})
	.catch(function(error) {
		window.alert("Please try again")
	});
}