console.log('test');

// display current date & time
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

//gets current hour
var currentHR = moment().format("ha");



//working hours 9am-5pm
//let's generate an array of the hourly slots below
var data = [
  {hr: '9am'},
  {hr: '10am'},
  {hr: '11am'},
  {hr: '12pm'},
  {hr: '1pmm'},
  {hr: '2pm'},
  {hr: '3pm'},
  {hr: '4pm'},
  {hr: '5pm'},
]
id = 0;
data.forEach(function(element) {
  element["id"] = id;
  id++
})

console.log(data);
