var now = new Date();
now.setMilliseconds(0.0);

var startHour = now.getHours();
var finishHour = now.getHours();

var startTime = new Date();
startTime.setMilliseconds(0.0);
startTime.setHours(startHour, 0, 0);

var finishTime = new Date();
finishTime.setMilliseconds(0.0);
finishTime.setHours(finishHour, 59, 59);

var titleText = document.getElementById('title');

// this function was going to serve 2 purposes: title time, and also the timeInHex
// but timeInHex is a little different in format so this function may not be suitable
var getTimeInHexHex = function(i, needSpace){
  var hours = "0" + i.getHours();
  var minutes = "0" + i.getMinutes();
  var seconds = "0" + i.getSeconds();
  var space;
  // check if the timestamp needs a leading space or not.
  needSpace === true ? space = " " : space = "";
  titleText.innerHTML += (space + hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2));
};
getTimeInHexHex(startTime, false);
titleText.innerHTML += " to ";
getTimeInHexHex(finishTime, true);

var tickTock = function() {
  for (var i = startTime; i <= finishTime; i.setSeconds(i.getSeconds() + 1)) {
    var hours = "0" + i.getHours();
    var minutes = "0" + i.getMinutes();
    var seconds = "0" + i.getSeconds();
    // substring so that we only take on the last 2 digits, as numbers > 9 will be 012, 034 etc.
    var timeInHex = hours.substr(-2) + minutes.substr(-2) + seconds.substr(-2);

    // create the div container and give it style/class
    var colourDiv = document.createElement("div");
    colourDiv.style.backgroundColor = '#' + timeInHex;
    colourDiv.className += "colour-div";
    // to highlight the time the app was loaded.
    if (String(i) == String(now)) {
      colourDiv.className += " outline";
    }

    // create the span for showing the colour as text
    var colourSpanText = document.createElement("span");
    colourSpanText.className += "time";
    colourSpanText.innerHTML = '#' + hours.substr(-2) + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    // add the span to the div
    colourDiv.appendChild(colourSpanText);

    // add the div to the #colours div element
    document.getElementById("colours").appendChild(colourDiv);
  }
};
tickTock();
