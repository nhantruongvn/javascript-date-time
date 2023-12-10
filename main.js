/* Display current date and time */
// create a function to update the date and time
function updateDateTime() {
    // create a new `Date` object
     now = new Date();

    // get the current date and time as a string
    const currentDateTimeLocale = now.toLocaleString();
    const currentDateTimeDefault = now.toString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.querySelector('#date-time-locale').textContent = currentDateTimeLocale;
    document.querySelector('#date-time-default').textContent = currentDateTimeDefault;
  }

  // call the `updateDateTime` function every second
  setInterval(updateDateTime, 1000);

/* Simple digital clock */
// Calling showTime function at every second
setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    // Getting current time and date
    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    am_pm = "AM";
 
    // Setting time for 12 Hrs format
    if (hour >= 12) {
        if (hour > 12) hour -= 12;
        am_pm = "PM";
    } else if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
 
    // Displaying the time
    document.getElementById("simple-digital-clock").innerHTML = currentTime;
}
 
showTime();


/* Wall clock */
