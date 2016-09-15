var app = angular.module("MainApp");

app.controller("TempController", function($scope){
});

app.filter("degrees", function(){
    return function(numb, symb){
        var temp= symb;
        if (temp === 'F'){
            return Math.round(numb)+ " "+temp+"°"
        } else {
            return Math.round((numb-32)/1.8) + " C°"
        }
    }
   
//     return function(number) {
//        if(!isNaN(number) || number > 0) {
//            return number + " filter works";
//        };
//    };
    
});



    
