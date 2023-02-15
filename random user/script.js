fetch("https://randomuser.me/api")
	.then((response) => response.json())
	.then((data) => dataReady(data));

function dataReady(data) {
	console.log(data);
	let result = data.results[0];
	let fullname =
		result.name.title + " " + result.name.first + " " + result.name.last;
	document.getElementById("full-name").innerHTML = fullname;

	let img = result.picture.large;
	document.getElementById("avatar-img").src = img;

	let username = result.login.username;
	document.getElementById("username").innerHTML = "@" + username;

	let email = result.email;
	document.getElementById("email").innerHTML = email;

	let country = result.location.timezone.description;
	document.getElementById("country").innerHTML = country;
}
