$(function() {
  console.log("jQueery Loaded!");

  var startTime = new Date();
  startTime.setHours(0, 0, 0);
  console.log(startTime);

  e = startTime;
  e.setSeconds(e.getSeconds() + 1);
  console.log(e);

  var endTime = new Date();
  endTime.setHours(01, 01, 01);
  console.log(endTime);

  currentTime = new Date();
  currentTime.setHours(0, 0, 0);

  var tickTock = function(){
    console.log(currentTime);
    for (var i = 0; i < 10 ; i++) {
      console.log(currentTime.getSeconds() + i);
    }
  };
  tickTock();

});
