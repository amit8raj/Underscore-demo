/**
 * Created by amitraj on 2/7/14.
 */
var underscore=require("underscore");
var obj= {
    "name":"application-name",
    "version": "0.0.1",
    "main":"app.js",
    "script": "",
    "engine": "",
    "dependencies": {
    "underscore": "^1.6.0"

}
}
var arr1=[2,5,3,7,2,5,3,7,3,5];
//for (var i in obj)
//{
//    arr1[i]= obj[i];
//    console.log(arr1);
//}
var newArr=[];

        for(var i in arr1)
        {
            if(i>5)
            {
            newArr[i]=arr1[i];
            }

        }
        console.log(newArr);


