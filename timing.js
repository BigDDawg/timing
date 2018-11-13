/*

 

Calculate the Time Remaining

we need to write a function that takes a string representing a given end time and

calculate the difference between that time and the current time.

 

*/

 

// Fired by function updateClock() { time is equal to the top function that

// var time = getTimeRemaining(endtime); --->>> time is the Object whose properties are displayed

// in the DOM.

// For example, .... ->  getTimeRemaining(deadline).minutes

 

function getTimeRemaining(endtime) {

 

  // endtime - initial time that was passed in

  // Create a variable to hold the remaining time until deadline.

  // Date.parse() converts time (a string) into milliseconds.

  // Gives us the amount of time till by subtracting two times from each other.

  // 2nd parse new Date() keeps firing

  var timeRemaining = Date.parse(endtime) - Date.parse( new Date() );

 

 

  // Divide all by 1000 - i.e. milliseconds by 1000 to convert to seconds

      var seconds = Math.floor( (timeRemaining / 1000) % 60);

      console.log("getTimeRemaining :"+seconds);

 

      // timeRemaining / 1000 gives you seconds

      console.log(timeRemaining/1000/60);

   

      var minutes = Math.floor( (timeRemaining / 1000 / 60) % 60 );

      console.log("getTimeRemaining :"+minutes);

     

      // Need to convert milliseconds to seconds, minutes

      var hours = Math.floor( (timeRemaining / (1000 * 60 * 60) ) % 24);

      var days = Math.floor( timeRemaining / (1000 * 60 * 60 * 24) );

 

      return {  // object returned to updateClock() and use it's properties

                // days, hours, minutes seconds as properties so they will be displayed in the DOM.

                // using innerHTML

        'total': timeRemaining,

        'days': days,

        'hours': hours,

        'minutes': minutes,

        'seconds': seconds

      };

}

 

 

// first function that gets fired

// parameters - id of the element that will contain our clock and the end time of the countdown

function initializeClock(id, endtime) {

 

// clock is our DOM Object created to attach time properties to display in the DOM.

// we attached querySelectors below to it.

    var clock = document.getElementById(id);

 

    var daysSpan = clock.querySelector('.days');

    var hoursSpan = clock.querySelector('.hours');

    var minutesSpan = clock.querySelector('.minutes');

    var secondsSpan = clock.querySelector('.seconds');

 

// updateClock here is fired by 3rd to last line of this function's outer function in initialize

    function updateClock() {

 

   // time is the top function fired with the end time passed in and

   // an Object gets returned w/ 'total': timeRemaining,'days': days,'hours': hours,

   // 'minutes': minutes, 'seconds': seconds - so get the name property values

        var timeRemaining = getTimeRemaining(endtime);

 

// How to put Zeros before the Time Numbers in the DOM.

// CLOCK SHOULD SHOW ------ 07 seconds ----- NOT 7 seconds

// Easy Way is add a string of ‘0′ to the beginning then use slice to the last two digits.

// Slice Example:     var str = 'The morning is upon us.';

//                    str.slice(-3);     // returns 'us.'

 

        daysSpan.innerHTML = timeRemaining.days; // getTimeRemaining(deadline).days

 

        hoursSpan.innerHTML = ('0' + timeRemaining.hours).slice(-2); // getTimeRemaining(deadline).hours

 

        minutesSpan.innerHTML = ('0' + timeRemaining.minutes).slice(-2);

 

        secondsSpan.innerHTML = ('0' + timeRemaining.seconds).slice(-2);

 

        if (timeRemaining.total <= 0) { // if total remaining time is less or equal to 0 clearInterval

                                        // updateClock function doesn't fire and everything stops

          clearInterval(timeinterval);

        }

    }

 

    updateClock(); // keeps on firing until the if statement above is true and clearInterval is fired.

 

// setInterval executes an anonymous function - updateClock - every second, which

// 1. Calculates the remaining time and inserts with innerHTML to our divs.

// 2. Stops the clock if the remaining time is equal to 0.

 

    var timeinterval = setInterval(updateClock, 1000);

}

 

// deadline -> gets passed in as the second parameter below

// 30 days, 24 hours, 60 minutes, 60 seconds - why is it times 1000

 

// By subtracting the current minutes * 60 + seconds from 3600 you get the time to the next full hour.

// Let's add 100 days so the countdown will work for the next 30 days.

 

// Date.parse() converts time (a string) into milliseconds.

// var deadline = new Date(Date.parse( new Date() ) + 30 * 24 * 60 * 60 * 1000);

 

var deadline = new Date("April 5, 2019 00:0:010");

 

// June 11-17, 2018

var deadline2 = new Date("June 11, 2019 00:0:010");

 
// The 147th Open Carnoustie  15th - 22nd July 2018

var deadline3 = new Date("July 15, 2019 00:0:010");

 
// Aug 9, 2018 – Aug 12, 2018

var deadline4 = new Date("August 9, 2018 00:0:010");

 
// var date2 = Date.parse(gameDateTime);

// 'clockdiv' is the outer div

 

initializeClock('clockdiv', deadline);

 

initializeClock('clockdiv2', deadline2);

 

initializeClock('clockdiv3', deadline3);

 

initializeClock('clockdiv4', deadline4);

 
