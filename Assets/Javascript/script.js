$(function () {
  var now = dayjs();

  function updateTime() {
    $("#currentDay").text(now.format("dddd, MMMM D"));
  }

  function updateColor() {
    var currentHour = now.hour();
    console.log(currentHour);
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      $(this).removeClass("past present future");
      if (blockHour < currentHour) {
        $(this).addClass("past");
        console.log(this)
        console.log("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
        console.log("present");
      } else {
        $(this).addClass("future");
        console.log("future");
      }
    });
  }

 function getLocalStorage() {
    $(".time-block").each(function () {
      var id = $(this).attr("id");
      var text = localStorage.getItem(id);
      $(this).children(".description").val(text);
    });
  }

  
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });
  

 
  

  updateTime();
  getLocalStorage()
  updateColor();
});










































