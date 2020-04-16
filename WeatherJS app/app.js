// Init storage
const storage = new Storage();
// get stored location data
const weatherLocation = storage.getLocationData();
// INit weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init UI
const ui = new UI();

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change state and city
    weather.changeLocation(city, state);

    // set location in Local storage
    storage.setLocationData(city, state);

    // Get and display weather
    getWeather();

    // Close Modal
    $('#locModal').modal('hide');

    e.preventDefault();
});

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        })
        .catch(err => console.log(err))
}


// api key:
// 1882dee8e91a5bc744d36baf455d1396