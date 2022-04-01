var weather;
function setup() {
    createCanvas(400,200);
    loadJSON('http://api.openweathermap.org/data/2.5/forecast/daily?q=(city,state,countrY)&cnt=5&units=imperial&appid=83cbfee912c51866e75dd9168b65181f', gotData);
}

function gotData(city,state,country) {
    println(data);
    weather = data;
}

gotData("atlanta","GA", "USA");