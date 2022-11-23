
var today = dayjs();
$("#date").text(today.format("MMM D, YYYY") + " at " );

var hour = dayjs();
$("#hour").text(hour.format("h:mm:ss"));


$( function() {
    $( "#datepicker" ).datepicker();
    
  } );

  

  // start the code here!!
   var projectName = $("#skill-name").val().trim();
   var projectType = document.querySelector(".dropdown");
   var listGroup = document.querySelector(".box-1");
   var dateInput = document.querySelector("#datepicker");
    var skillsListEl = document.querySelector("#skillsList");
    var add = document.querySelector("#add-project");

  var printSkills = function(name, date) {
    var listEl = $('<div>');
    var listDetail = name.concat(" on ", date);
    listEl.addClass("dropdown-menu").text(listDetail);
    listEl.appendTo(skillsListEl);
  }
  
  var handleFormSubmit = function (event) {
    event.preventDefault();
    
    var nameInput = projectName;
    console.log(nameInput);
    var dateEl = dateInput;
    console.log(dateEl);
  
    if (!nameInput || !dateEl) {
      console.log();
      return;
    }
  
    printSkills(nameInput, dateEl);
  
    nameInput = "";
    dateEl = "";
  } 

   add.addEventListener("click", handleFormSubmit);
