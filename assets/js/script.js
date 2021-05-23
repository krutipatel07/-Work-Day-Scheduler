// $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

$(document).ready(function () {// essentially load 1)html & 2)css first.
    //display current day & time.
    $("#currentDay").text(moment().format("dddd, MMM Do YYYY"));

    //Assign saveBtn click listener for user input and time stamp
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
    //load any saved data from LocalStorage - do this for each hour created.

    function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".scheduleTimeBlock").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            //check if we've moved past this time
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
