var weather;
function setup() {
    createCanvas(400,200);
    loadJSON('http://api.openweathermap.org/data/2.5/forcast/daily?q=(city,state,countrY)&cnt=5&units=imperial&appid=83cbfee912c51866e75dd9168b65181f', gotData);
}

function gotData(city,state,country) {
    println(data);
    weather = data;
}

function draw() {
    background(0);
    if (weather) {
        ellipse(100, 100, weather.current.humidity);
        ellipse(300, 100, weather.current.uvi);
    } 
}
gotData("atlanta","GA", "USA");