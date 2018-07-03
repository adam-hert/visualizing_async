require('appoptics-apm')
const express = require('express')
const app = express()
const request = require('request');

app.get('/',  function (req,res){

function get_data(callback){


  request('http://localhost:8082/api-v1/hotels', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
    });

  request('http://localhost:8082/api-v1/hotels', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
    });

  request('http://localhost:8082/api-v1/hotels', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body);
    });


  callback();
}

function send_response(){
	console.log('sending response');
	res.send('Hello World');
}

get_data(send_response)


})

app.listen(300, () => console.log('Example app listening on port 300!'))
