const express = require('express');
const https = require('https');

const app = express();


app.get("/" ,function(req,res){
  const url ="https://api.openweathermap.org/data/2.5/weather?q=Busan&appid=b98aaeea1cec8d5ba70359c2c2354620&units=metric";
  https.get(url, function(response){
    console.log(response.statusCode);
    response.on("data", function(data){

      const weatherData = JSON.parse(data);
      const tempr = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is " + weatherDescription +"</p>");
      res.write("<h1>The temperature in Busan is " + tempr +"degrees Celcius.</h1>" );
      res.write("<p><img src="+imageurl+"></p>")
      res.send();
    });
  });

})

app.listen(3000,function(){
  console.log("Server is running on Port 3000")
});
