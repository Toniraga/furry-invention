const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

populateUI();

let ticketPrice = +movieSelect.value

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice);
}

function updateSelectedCount() {
    const selectedSeats = container.querySelectorAll(".selected");
    const seatIndex = [...selectedSeats].map((seat) => {
        return [...seats].indexOf(seat)
    })
    localStorage.setItem('SeatIndex', JSON.stringify(seatIndex));

    const selectedSeatsCount = selectedSeats.length;
    selectedSeatsPrice = ticketPrice * selectedSeatsCount
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsPrice;
}

// Get data from LS
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('SeatIndex'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex') 
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


movieSelect.addEventListener('change', e => {
    const currentMoviePrice = +e.target.value
    ticketPrice = currentMoviePrice;

    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

updateSelectedCount();


















// const container = document.querySelector(".container");
// const seats = document.querySelectorAll('.row .seat:not(.occupied)');
// const count = document.getElementById('count');
// const total = document.getElementById('total');
// const movieSelect = document.getElementById('movie');

// populateUI();


// let ticketPrice = +movieSelect.value;


// // Save selected movie index and price
// function setMovieData(movieIndex, moviePrice) {
//     localStorage.setItem('selectedMovieIndex', movieIndex);
//     localStorage.setItem('selectedMoviePrice', moviePrice);
// }


// // Update total and count
// function updateSelectedCount() {
//     const selectedSeats = document.querySelectorAll('.row .seat.selected');

//     const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
    
//     localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

//     const selectedSeatsCount = selectedSeats.length;
//     count.innerText = selectedSeatsCount;
//     total.innerText = selectedSeatsCount * ticketPrice;
// }

// // Get data from local Storage and populate UI
// function populateUI() {
//     const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

//     if(selectedSeats !== null && selectedSeats.length > 0) {
//         seats.forEach( (seat, index) => {
//             if(selectedSeats.indexOf(index) > -1) {
//                 seat.classList.add('selected');
//             }
//         });
//     }

//     const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

//     if(selectedMovieIndex !== null) {
//         movieSelect.selectedIndex = selectedMovieIndex;
//     }
// }

// // Movie select event
// movieSelect.addEventListener('change', (e) => {
//     ticketPrice = +e.target.value;
//     setMovieData(e.target.selectedIndex, e.target.value);
//     updateSelectedCount();
// })

// // Seat Click event
// container.addEventListener('click', (e) => {
//     if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//         e.target.classList.toggle('selected');

//         updateSelectedCount();
//     }
// }
// );

// // Initial count and total set
// updateSelectedCount();

