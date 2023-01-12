window.addEventListener('load', function(){
    var searchForm = document.getElementById("searchForm");
    var cityInput = document.getElementById("cityInput");
    var API_KEY = "458ac284ed82506b853e5d277ec61cb1";
    var city = cityInput.value;
    var lat, lng;
    
    function getWeather(lat, lng){
        var API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    }
    
    searchForm.addEventListener("submit", async function(event){ 
        event.preventDefault();
        city = cityInput.value;
        console.log("Submitted " + cityInput.value);
        try{
            let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=5ffc6c893abd4262b33abf21d8deab53`);
            let data = await response.json();
            lat = data.results[0].geometry.lat;
            lng = data.results[0].geometry.lng;
            getWeather(lat, lng);
        }catch(error){
            console.log(error);
        }
        finally {console.log("Weather fetched");
        
    }});
    
});