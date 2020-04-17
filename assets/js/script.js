// get current date
const today = new Date();

var month = today.toLocaleString('default', {month: 'long'});
var dayNum = today.getDate();

var todayOutput = month + " " + dayNum + "," + today.getFullYear();

var weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";

var weekday = today.getDay();

$('#currentDay').text("Today is: " + weekdays[weekday] + " " + todayOutput);

// Build Calendar Time Blocks

// On click event for save button
$(document).ready(function(){
    $(".savebBtn").click(function(){
      $("input:text").val();
    });
  });

// Color code events: past, present, future