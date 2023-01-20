console.log("test");

// display current date & time
var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm a")
$("#currentDay").text(timeStamp);

//gets current hour
var currentHR = moment().format("ha");
console.log(currentHR);

//working hours 9am-5pm
//let's generate an array of the hourly slots below
var data = [
  { hr: "9am" },
  { hr: "10am" },
  { hr: "11am" },
  { hr: "12pm" },
  { hr: "1pmm" },
  { hr: "2pm" },
  { hr: "3pm" },
  { hr: "4pm" },
  { hr: "5pm" },
];

// remove before deployment, needs to test
// current time instead of morning
// temporary variable
var data = [

  { hr: "8pm" },
  { hr: "9pm" },
  { hr: "10pm" },
   {hr: "11pm"}
];

function renewData() {
  $(".container").children().remove();
  id = 0;

  //let's get current time in unix format
  var nowHR = moment().format("ha");
  var nowUnix = parseInt(moment(nowHR, "ha").format("X"));
  //console.log(typeof(nowUnix))
  console.log('noWunix' , nowUnix);
  data.forEach(function (element) {
    //let's get unix time of element's hour
    var thisElementHR = moment(element.hr, "ha");
    var thisElementHRUnix = parseInt(thisElementHR.format("X"));
    console.log(thisElementHRUnix)
    requiredClass = "present"
    if (nowUnix > thisElementHRUnix) {
      requiredClass = "past"
    } else if (nowUnix < thisElementHRUnix) {
      requiredClass = "future"
    }
    //add class name to properties
    element["classAssign"] = requiredClass;
    //not sure what for, but will add id's in case
    element["id"] = "textarea-" + id;


    //let's generate html of the time blocks.
    //whole row
    var wholeRow = $('<div>');
    wholeRow.addClass("whole-row")

    //hour section
    var hrSection= $("<div>");
    hrSection.addClass("hour")
    hrSection.text(element["hr"]);

    //colourful section for user input
    var timeBlock = $('<textarea>');
    timeBlock.attr("name", element.id);
    timeBlock.addClass("row");
    timeBlock.addClass(element["classAssign"])

    //save button
    var saveBTN = $("<button>");
    saveBTN.addClass("saveBtn");
    saveBTN.attr("id", "button=" + id);
    var img = $("<img id='save' height='25px' src='./assets/img/floppy.jpg'/>")
    saveBTN.append(img);
   
    wholeRow.append(hrSection, timeBlock, saveBTN)
    $(".container").append(wholeRow);
    id++;
  });
}

renewData();

console.log(data);
