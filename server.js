require('appoptics-apm')
const express = require('express')
const app = express()
const request = require('request');

var tasks_left = 0

app.get('/',  function (req,res){
  tasks_left = 3;

  service_call_1 = request('http://localhost:8082/api-v1/hotels', { json: true }, function(error,response,body){
    return_res(req,res)
  });

  service_call_2 = request('http://localhost:8082/api-v1/hotels', { json: true }, function(error,response,body){
    return_res(req,res)
  });

  service_call_3 = request('http://localhost:8082/api-v1/hotels', { json: true }, function(error,response,body){
    return_res(req,res)
  });

  analytics_payload = {'tags': {'environment': 'test'}, 'measurements': [{'name': 'anayltics', 'value': 5}]} // random value to analytics
  request.post({uri: 'https://api.appoptics.com/v1/measurements',json:true, auth:{'user':'f50a06a6857134ab54595f4165a30f31c4b9c2291b822bca7629a7df3289f44d', 'pass':''}, 'body':analytics_payload}, function(error,response,body){
    //do nothing
  });

})


var return_res = function (req,res){
  tasks_left -=1;
  console.log(tasks_left)
  if (tasks_left == 0){
    res.send('Hello World')
  }
}


app.listen(300, () => console.log('Example app listening on port 300!'))
