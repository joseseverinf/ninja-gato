//SIEMPRE PRIMERO LLAMAR $(document).ready(function(){}
$(document).ready(function () {
  console.log("ready!");
  $("#imageChange1").click(function () {
    if ($(this).attr("src") == $(this).attr("data-src")) {
      var a = $(this).attr("data-swap");
      $(this).attr("src", a);
    } else {
      var b = $(this).attr("data-src");
      $(this).attr("src", b);
    }
  });
  $("#imageChange2").click(function () {
    if ($(this).attr("src") == $(this).attr("data-src")) {
      var a = $(this).attr("data-swap");
      $(this).attr("src", a);
    } else {
      var b = $(this).attr("data-src");
      $(this).attr("src", b);
    }
  });
  $("#imageChange3").click(function () {
    if ($(this).attr("src") == $(this).attr("data-src")) {
      var a = $(this).attr("data-swap");
      $(this).attr("src", a);
    } else {
      var b = $(this).attr("data-src");
      $(this).attr("src", b);
    }
  });
  $("#imageChange4").click(function () {
    if ($(this).attr("src") == $(this).attr("data-src")) {
      var a = $(this).attr("data-swap");
      $(this).attr("src", a);
    } else {
      var b = $(this).attr("data-src");
      $(this).attr("src", b);
    }
  });
  /* acá inicia el 5id */
  $("#imageChange5").click(function () {
    if ($(this).attr("src") == $(this).attr("data-src")) {
      var a = $(this).attr("data-swap");
      $(this).attr("src", a);
    } else {
      var b = $(this).attr("data-src");
      $(this).attr("src", b);
    }
  });
  
});
