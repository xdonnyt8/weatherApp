$(document).ready(function () {
    var locationData = {
        nameOfLocation: "",
        temperatureOfLocation: "",
        humidityOfLocation: "",
        windspeed: "",
        uvIndex: ""
    }


    var searchTerm = ""




    $("form").submit(function (e) {
        e.preventDefault();
        searchTerm = $(".locationInput").val();
        currentWeather(searchTerm);
    });


    function currentWeather(locationA) {
        var key = "0ce65783a3168e1d2da3d79837c723ef"

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + locationA + "&appid=" + key

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var locationB = $("<div class='loc'>");
            var LocationName = response.name;
            var temperature = Math.trunc(((response.main.temp - 273)*9/5)+32);
            var humidity = response.main.humidity
            var windSpeed = response.wind.speed
            var uvLight = "";
            var lineOne = $("<header>").text(LocationName);
            locationB.append(lineOne)
            var lineTwo = $("<p>").text("The temperature is: " + temperature + " °F");
            locationB.append(lineTwo)
            var lineThree = $("<p>").text("The humidity is: " + humidity +"%");
            locationB.append(lineThree)
            var lineFour = $("<p>").text("The wind speed is: " + windSpeed + "m/h");
            locationB.append(lineFour)

            
            console.log(temperature)
            console.log(LocationName)
            console.log(humidity)
            console.log(windSpeed)

            $("#myWeather").append(locationB);
        });
    };

    function searchLocation(places) {

    }
});

