$(document).ready(function() {
  $("#button").click(function() {
    var color = $("#color1").val();
    var born = $("#born1").val();
    var food = $("#food1").val();

    if (color === "Yellow" && born === "Pride Rock" && food === "Banana") {
      $("#rafiki").show();
    }
    else if (color === "Black" && born === "Elephants Guard" && food === "Meat") {
      $("#scar").show();
    }

    else if (color === "Red" && born === "Jungle" && food === "Bugs") {
      $("#timon").show();
    }

    else {
      $("#nobody").show();
    }

  });

});
