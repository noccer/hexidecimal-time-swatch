$(function() {
  console.log("jQueery Loaded!");

  var startTime = new Date();
  startTime.setHours(0, 0, 0);
  console.log(startTime);

  e = startTime;
  e.setSeconds(e.getSeconds() + 1);
  console.log(e);

  var endTime = new Date();
  endTime.setHours(23, 59, 59);
  console.log(endTime);

});
