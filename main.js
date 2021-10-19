var myVar = setInterval(function() {
  myTimer();
}, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}

function amer_GMT(){
let amerka = new Date().toLocaleString('en-US',
{ timeZone:'America/Los_Angeles' })
document.getElementById('Los_Angeles_clock').innerHTML = amerka;
};

setInterval(function(){
  amer_GMT();
}, 1000);