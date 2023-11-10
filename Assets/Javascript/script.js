$(function () {

  function updateTime() {
    let now = dayjs()
    $("#currentDay").text(now.format("dddd, MMMM D"));
  }

  function updateColor() {
    let now = dayjs()
    let hour = now.hour();
    $(".time-block").each(function () {
      let trueTime = $(this).data("time");
      $(this).toggleClass("past", trueTime < hour);
      $(this).toggleClass("present", trueTime === hour);
      $(this).toggleClass("future", trueTime > hour);
    });
  }

  function getLocalStorage() {
    $(".time-block").each(function () {
      const id = $(this).attr("id");
      const text = localStorage.getItem(id);
      $(this).children(".description").val(text);
    });
  }

  function pageStart() {
    updateTime();
    updateColor();
    getLocalStorage();
  }

  $(".saveBtn").on("click", function () {
    const time = $(this).parent().attr("id");
    const text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });

  pageStart();
  setInterval(updateColor, 1000)
});
