var apiKey = '76c78f1c570c57181fd59c9ee28ddb82';

function getForecast () {
    var cityName = $("#city-input").val();

    var todayURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey;

    $.ajax({
        url: todayURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        var inputCity = response.name;
        var currentIcon = response.weather[0].icon;
        var currentIconURL = "http://openweathermap.org/img/w/" + currentIcon + ".png";
        var currentTemp = parseInt(response.main.temp) + " °F";
        var currentWind = parseInt(response.wind.speed) + "mph";
        var currentHumidity = parseInt(response.main.humidity) + "%";
        $("#city").text(inputCity);
        $("#icon-today").attr({"src": currentIconURL});
        $("#temp-today").text(currentTemp);
        $("#wind-today").text(currentWind);
        $("#humidity-today").text(currentHumidity);
    });

    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=imperial&appid=' + apiKey;

    $.ajax({
        url: forecastURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        var dayOneIcon = response.list[3].weather[0].icon;
        var dayOneIconURL = "http://openweathermap.org/img/w/" + dayOneIcon + ".png";
        var dayOneTemp = parseInt(response.list[3].main.temp) + " °F";
        var dayOneWind = parseInt(response.list[3].wind.speed) + "mph";
        var dayOneHumidity = parseInt(response.list[3].main.humidity) + "%";
        $("#icon-day-one").attr({"src": dayOneIconURL});
        $("#temp-day-one").text(dayOneTemp);
        $("#wind-day-one").text(dayOneWind);
        $("#humidity-day-one").text(dayOneHumidity);

        var dayTwoIcon = response.list[11].weather[0].icon;
        var dayTwoIconURL = "http://openweathermap.org/img/w/" + dayTwoIcon + ".png";
        var dayTwoTemp = parseInt(response.list[11].main.temp) + " °F";
        var dayTwoWind = parseInt(response.list[11].wind.speed) + "mph";
        var dayTwoHumidity = parseInt(response.list[11].main.humidity) + "%";
        $("#icon-day-two").attr({"src": dayTwoIconURL});
        $("#temp-day-two").text(dayTwoTemp);
        $("#wind-day-two").text(dayTwoWind);
        $("#humidity-day-two").text(dayTwoHumidity);

        var dayThreeIcon = response.list[19].weather[0].icon;
        var dayThreeIconURL = "http://openweathermap.org/img/w/" + dayThreeIcon + ".png";
        var dayThreeTemp = parseInt(response.list[19].main.temp) + " °F";
        var dayThreeWind = parseInt(response.list[19].wind.speed) + "mph";
        var dayThreeHumidity = parseInt(response.list[19].main.humidity) + "%";
        $("#icon-day-three").attr({"src": dayThreeIconURL});
        $("#temp-day-three").text(dayThreeTemp);
        $("#wind-day-three").text(dayThreeWind);
        $("#humidity-day-three").text(dayThreeHumidity);

        var dayFourIcon = response.list[27].weather[0].icon;
        var dayFourIconURL = "http://openweathermap.org/img/w/" + dayFourIcon + ".png";
        var dayFourTemp = parseInt(response.list[27].main.temp) + " °F";
        var dayFourWind = parseInt(response.list[27].wind.speed) + "mph";
        var dayFourHumidity = parseInt(response.list[27].main.humidity) + "%";
        $("#icon-day-four").attr({"src": dayFourIconURL});
        $("#temp-day-four").text(dayFourTemp);
        $("#wind-day-four").text(dayFourWind);
        $("#humidity-day-four").text(dayFourHumidity);

        var dayFiveIcon = response.list[35].weather[0].icon;
        var dayFiveIconURL = "http://openweathermap.org/img/w/" + dayFiveIcon + ".png";
        var dayFiveTemp = parseInt(response.list[35].main.temp) + " °F";
        var dayFiveWind = parseInt(response.list[35].wind.speed) + "mph";
        var dayFiveHumidity = parseInt(response.list[35].main.humidity) + "%";
        $("#icon-day-five").attr({"src": dayFiveIconURL});
        $("#temp-day-five").text(dayFiveTemp);
        $("#wind-day-five").text(dayFiveWind);
        $("#humidity-day-five").text(dayFiveHumidity);
    });

    $("#city-input").val("");
};

$("#submit").on("click", getForecast);

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