$(function() {
  console.log("jQueery Loaded!");

  // var seconds = 0;
  // var minutes = 0;
  // var hours = 0;
  // var time = [hours, minutes, seconds];

  var startTime = new Date();
  startTime.setHours(0,0,0);
  console.log(startTime);

  e = startTime;
  e.setSeconds(e.getSeconds() + 1);
  console.log(e);

  var endTime = new Date();
  endTime.setHours(23,59,59);
  console.log(endTime);
  // var colourMaker = function(time) {
  //   // increase seconds by 1 so long as time is less than 24:00:00
  //   if (seconds < 60 && minutes < 60 && hours < 24) {
  //     seconds += 1;
  //   }
  //   // reset seconds back to 0 once it reaches 60
  //   if (seconds === 60) {
  //     seconds = 0;
  //     if (minutes < 60) {
  //       minutes += 1; // add a minute on
  //     }
  //   }
  //   //
  //
  // };







});
