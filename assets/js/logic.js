console.log("test");

// display current date & time
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

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
  { hr: "4pm" },
  { hr: "5pm" },
  { hr: "6pm" },
  { hr: "7pm" },
  { hr: "8pm" },
  { hr: "9pm" },
  { hr: "10pm" },
];

function renewData() {
  $(".container").children().remove();
  id = 0;
  currentClass = "past";
  data.forEach(function (element) {
    element["id"] = id;
    element["classAssign"] = currentClass;
    if (currentHR == element["hr"]) {
      element["classAssign"] = "present";
      currentClass = "future";
    }
    id++;
    var wholeRow = $('<div>');
    wholeRow.addClass("whole-row")
    var timeBlock = $('<div>');
    timeBlock.addClass("row");
    var hrSection= $("<span>");
    hrSection.addClass("hour")
    hrSection.text(element["hr"]);
    var area = $("<span>");
    area.text= "dummy text";
    var btn = $("<button>");
    btn.text = "save!";
    btn.addClass("saveBtn");
    var saveBTN = $("<button>");
    saveBTN.addClass("SaveBtn");
    var img = $("<img id='save' height='35px' width='35px' src='./assets/img/floppy.jpg'/>")
    saveBTN.append(img);

    timeBlock.append(hrSection);

    timeBlock.addClass(element["classAssign"])
    wholeRow.append(hrSection, timeBlock, saveBTN)
    $(".container").append(wholeRow);
  });
}

renewData();

console.log(data);
