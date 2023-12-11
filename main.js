/* Display current date and time */
// Update date and time
function updateDateTime() {
    // Create a single `Date` object
     now = new Date();

    // get the current date and time as a string
    const currentDateTimeLocale = Intl.DateTimeFormat().format(now);
    const currentDateTimeDefault = now.toString();

    // update the `textContent` property of the `span` element with the `id` of `datetime`
    document.getElementById("date-time-locale").textContent = currentDateTimeLocale;
    document.getElementById("date-time-default").textContent = currentDateTimeDefault;
  }

  // call the `updateDateTime` function every seconds
  setInterval(updateDateTime, 1000);

/* Simple digital clock */
// Calling showTime function at every seconds
setInterval(showTime, 1000);
 
// Defining showTime funcion
function showTime() {
    const now = new Date();
    // Extract time components
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM/PM
    const amPm = (hours >= 12) ? "PM" : "AM";

    // Convert to 12-hours format and add padding
    let twelveHour = hours;
    if (hours > 12) twelveHour -=12;
    if (twelveHour === 0) twelveHour = 12;
    twelveHour = (twelveHour < 10) ? `0${twelveHour}` : twelveHour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
 
    // Assemble and display formatted time
    const currentTime = `${twelveHour}:${minutes}:${seconds} ${amPm}`;
    document.getElementById("simple-digital-clock").textContent = currentTime;
}
// Show time initially
showTime();


/* Wall clock
Reference source: geeksforgeeks.org/how-to-create-analog-clock-using-html-css-and-javascript/
*/
