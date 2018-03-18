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
var name = $("#nameInput").val().trim();
var email = $("#emailInput").val().trim();
var message = $("#messageInput").val().trim();

$("#submitButton").click(function(event) {
	event.preventDefault();

	database.ref().set({
		name: name,
		email: email,
		message: message
	});
});