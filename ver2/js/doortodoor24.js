requirejs.config({baseUrl:"js",paths:{angular:"https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.min",jquery:"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min",domready:"https://cdnjs.cloudflare.com/ajax/libs/domready/1.0.8/ready.min",underscore:"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min"},shim:{angular:{deps:["jquery"],exports:"angular"}}});var formUrl="https://script.google.com/macros/s/AKfycbxNDy2y87viJDKfOgQZalVYXlqwNQXmHD07hhVXH9rbMBhmp34/exec",formDataFormat={place0:"",place1:"",date:"",name:"",tel:"",item:"",comment:""};require(["angular","app/createApp"],function(a){a.bootstrap(document,["doortodoor24App"])});