# Hexidecimal Time Swatch

[View a live demo here](https://noccer.github.io/hexidecimal-time-swatch/)

A simple single page app that prints out every second of a given hour as a colour swatch. Hover over each cell to see what time of the day the colour represented.

## What is it?

In html pages, you can choose to colour an element using the [hexidecimal colour system](https://en.wikipedia.org/wiki/Hexadecimal).

> Example 1: `#000000` represents black
> <div style="display: flex; align-items: center; justify-content: center; width: 200px; height: 100px; color: white; background-color: #000000; padding: 10px;">
>   I am a div with background colour #000000;
></div>

> Example 2: `#ff0000` represents red
> <div style="display: flex; align-items: center; justify-content: center; width: 200px; height: 100px; color: white; background-color: #ff0000; padding: 10px;">
>   I am a div with background colour #ff0000;
></div>

That means that any time of the 24-hour day from `00:00:00` to `23:59:59` can be represented as a colour:

> Example 3: `#113949` represents 11:39:49am
> <div style="display: flex; align-items: center; justify-content: center; width: 200px; height: 150px; color: white; background-color: #113949; padding: 10px;">
>   I am a div with background colour #113949, which was derived from `11:39:49am`;
></div>

## Eh, but what does this repo do?

Well it takes the current hour, performas a loop over all 3600 seconds and renders a colour cell for each of those seconds. Neat!

<div style="max-width: 50%; margin: 0 auto;">
    <img src="./hexidecimal_time_swatch.png" alt="Hexidecimal Time Swatch" />
</div>

## Todo

- rebuild in React maybe
- add a counter interval to update the highlighted cell every time a second ticks.