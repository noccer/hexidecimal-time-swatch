
  var startTime = new Date();
  startTime.setHours(0, 0, 0);

  e = startTime;
  e.setSeconds(e.getSeconds());

  var endTime = new Date();
  endTime.setHours(00, 59, 59);

  var tickTock = function(){
    for (var i = startTime; i <= endTime; i.setSeconds(i.getSeconds() + 1)) {
      var hours = "0" + i.getHours();
      var minutes = "0" + i.getMinutes();
      var seconds = "0" + i.getSeconds();
      // substring so that we only take on the last 2 digits, as numbers > 9 will be 012, 034 etc.
      var timeInHex = hours.substr(-2) + minutes.substr(-2) + seconds.substr(-2);

      // create the div container and give it style/class
      var colourDiv = document.createElement("div");

      colourDiv.style.backgroundColor = '#' + timeInHex;
      colourDiv.className += "colour-div";

      // create the span for showing the colour as text
      var colourSpanText = document.createElement("span");
      colourSpanText.className += "time";
      colourSpanText.innerHTML = '#' + timeInHex;

      // add the span to the div
      colourDiv.appendChild(colourSpanText);

      // add the div to the #colours div element
      document.getElementById("colours").appendChild(colourDiv);
    }
  };
  tickTock();
