var apiKey = '76c78f1c570c57181fd59c9ee28ddb82'
var url = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=76c78f1c570c57181fd59c9ee28ddb82'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
});

var date = dayjs();
  $('#date-today').text(date.format("MMM D, YYYY"));

