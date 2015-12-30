requirejs.config({
    baseUrl: "js",
    paths: {
        angular:"https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.min",
        jquery: "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min",
        domready:"https://cdnjs.cloudflare.com/ajax/libs/domready/1.0.8/ready.min",
        underscore:"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min"
    },
    shim:{
        'angular':{
            deps: ['jquery'], //angular가 로드되기 전에 jquery가 로드 되어야 한다.
            exports:'angular' //로드된 angular 라이브러리는 angular 라는 이름의 객체로 사용할 수 있게 해준다
        }
    }
});

// var socialListUrl = "https://spreadsheets.google.com/feeds/list/1YrZ461_BKx1okwSKvz_uD4WWf1n24AFQx7ekZRDye2s/1/public/values?alt=json";
var formUrl = "https://script.google.com/macros/s/AKfycbxNDy2y87viJDKfOgQZalVYXlqwNQXmHD07hhVXH9rbMBhmp34/exec";
var formDataFormat = {
    place0:"", // 현재위치
    place1:"", // 이사위치
    date:"", // 이사날짜
    name:"", // 성함
    tel:"", // 연락처
    item:"", // 주요물품
    comment:"" // 추가물품 코멘트
};

require(["app/createApp"],function(){
    angular.bootstrap(document,["doortodoor24App"]);
});