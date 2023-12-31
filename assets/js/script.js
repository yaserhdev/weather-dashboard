var apiKey = '76c78f1c570c57181fd59c9ee28ddb82'
var url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=76c78f1c570c57181fd59c9ee28ddb82'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
});

// Code to display today's date and the dates of the next 5 consecutive days
let dateToday = new Date();
$('#date-today').text(dateToday.toLocaleDateString());

let dayOne = new Date();
dayOne.setDate(dayOne.getDate() + 1);
$('#day-one').text(dayOne.toLocaleDateString());

let dayTwo = new Date();
dayTwo.setDate(dayTwo.getDate() + 2);
$('#day-two').text(dayTwo.toLocaleDateString());

let dayThree = new Date();
dayThree.setDate(dayThree.getDate() + 3);
$('#day-three').text(dayThree.toLocaleDateString());

let dayFour = new Date();
dayFour.setDate(dayFour.getDate() + 4);
$('#day-four').text(dayFour.toLocaleDateString());

let dayFive = new Date();
dayFive.setDate(dayFive.getDate() + 5);
$('#day-five').text(dayFive.toLocaleDateString());