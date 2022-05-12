$(document).ready(function () {
    $(".mainimage").mouseover(function () {
      $(".objdisplay").css('display', 'block');
    });
    $(".mainimage").mouseout(function () {
      $(".objdisplay").css('display', 'none');
    });
  });