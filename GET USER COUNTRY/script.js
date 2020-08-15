
// fetch("http://ip-api.com/json")
// 	.then((res) => res.json())
// 	.then((response) => {
// 		console.log("Country: ", response.country);
// 	})
// 	.catch((data, status) => {
// 		console.log("Request failed");
// 	});




// var requestOptions = {
// 	method: "GET",
// 	redirect: "follow",
// };

// fetch(
// 	"https://api.covid19api.com/total/country/Nigeria/status/confirmed/date/2020-03-21T13:13:30Z",
// 	requestOptions
// )
// 	.then((response) => response.text())
// 	.then((result) => {
// 		console.log(result);
// 	})
//     .catch((error) => console.log("error", error));
    

fetch("https://ipapi.co/json")
	.then((response) => response.json())
	.then((result) => {
		console.log(result);
	})
	.catch((error) => console.log("error", error));
