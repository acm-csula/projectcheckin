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
			window.alert("Check In Successful");
			clearSpaceInvaders();
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
			window.alert("Check In Successful");
			clearAccord();
		})
	}
	else{
		window.alert("All fields are required")
	}
}

function clearAccord(){
	document.getElementById('accordMemberCIN').value = '';
	document.getElementById('accordMemberName').value = '';
}

function clearSpaceInvaders(){
	document.getElementById('spaceInvadersMemberCIN').value = '';
	document.getElementById('spaceInvadersMemberName').value = '';
}

const list_div_spaceInvaders = document.querySelector("#list_div_spaceInvaders");

db.collection("Space Invaders").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			list_div_spaceInvaders.innerHTML += "<div class='list-item-spaceInvaders'><h3>" + doc.data().name + "\n" + doc.data().cin + "</h3></div>"
        });
});

const list_div_accord = document.querySelector("#list_div_accord");

db.collection("Accord").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			list_div_accord.innerHTML += "<div class='list-item-accord'><h3>" + doc.data().name + "\n" + doc.data().cin + "</h3></div>"
        });
});