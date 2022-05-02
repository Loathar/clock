"use strict";

// Variables
// Getting elemets from css class
const clock = document.querySelector(".clock");
const msg = document.querySelector(".msg");

//////////// Functions ////////

const clockTimer = function () {
  // Creating time and date useing js data method and formating it using tolocaltimestring

  const now = new Date().toLocaleTimeString();
  clock.textContent = now;
};
// setInterval makes the clock timer run every second
setInterval(() => {
  clockTimer();
}, 1);

// Set msg that displays differently dependent on the time of day.

const setMsg = function () {
  if (now < "12:00") {
    msg.innerHTML = " Good morning ";
  } else if (now > "18:00") {
    msg.innerHTML = " Good evening Tor Henning ";
  } else {
    msg.innerHTML = " Good afternoon Tor Henning ";
  }
};
setMsg();
console.log(now);
