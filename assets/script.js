window.addEventListener('load', function(){
    var searchForm = document.getElementById("searchForm");
    var cityInput = document.getElementById("cityInput");
    
    function getWeather(){
    console.log("getWeather")
    }
    
    searchForm.addEventListener("submit", function(event){ 
        event.preventDefault();
        console.log("Submitted " + cityInput.value);
        getWeather();
        console.log("Weather fetched");
    
    });
    });