// Initialize Firebase
var config = {
	apiKey: "AIzaSyAjG86f0kX1pmdcmYA5XbbFJMoULMRqlrQ",
	authDomain: "portfolio-contact-71957.firebaseapp.com",
	databaseURL: "https://portfolio-contact-71957.firebaseio.com",
	projectId: "portfolio-contact-71957",
	storageBucket: "",
	messagingSenderId: "155461234441"
};

firebase.initializeApp(config);

var database = firebase.database();

//Grab values from contact form


$("#submitButton").on("click", function(event) {
	event.preventDefault();
	
	var name = $("#nameInput").val().trim();
	console.log(name);
	var email = $("#emailInput").val().trim();
	var message = $("#messageInput").val().trim();
	
	database.ref().set({
		name: name,
		email: email,
		message: message
	});
});

// database.ref().on("value", function(snapshot) {
// 	// Print the initial data to the console.
// 	console.log(snapshot.val());
// 	// Log the value of the various properties
// 	console.log(snapshot.val().name);
// 	console.log(snapshot.val().email);
// 	console.log(snapshot.val().message);
// });