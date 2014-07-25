/**
 * Created by amitraj on 2/7/14.
 */
var request =require('request');

request.get('http://google.com',function(err,response,body)
{
    console.log("error" + err);
    console.log("response" + response);
    console.log("body" + body);
})

