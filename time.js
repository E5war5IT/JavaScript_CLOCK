function Texas_GMT(){
var dt =new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
document.getElementById('clock_New_York' ).innerHTML = dt;
}

setInterval(function(){
  Texas_GMT()
}, 1000);

let test_clock = document.getElementById('test_clock');
let utc_5 = document.getElementById('utc_5');

function clock_testing(){
  setInterval(function(){
    let date = new Date();
    test_clock.innerHTML = date
  },1000);
};clock_testing();

function utc_5_testing(){
  setInterval(function(){
let now = new Date().toLocaleString("ru-RU", {timeZone:'Europe/Moscow'})
utc_5.innerHTML = now  ;
  },1000);
};utc_5_testing();