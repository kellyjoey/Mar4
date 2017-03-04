var fs = require("fs");

$(".submit").on("click", function(event) {
      console.log("you clicked submit");
      // event.preventDefault();
      // var newReservation = {
      //   name: $("#reserve_name").val().trim(),
      //   phone: $("#reserve_phone").val().trim(),
      //   email: $("#reserve_email").val().trim(),
      //   uniqueID: $("#reserve_uniqueID").val().trim()
      // };

      // // Question: What does this code do??
      // $.post("/api/new", newReservation)
      // .done(function(data) {
      //   console.log(data);
      //   fs.appendFile(tables.txt, data);
      //   alert("Adding reservation...");
      // });
    });