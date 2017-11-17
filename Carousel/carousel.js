$(document).ready(function(){
  setTimeout(autoAddClass, 5000);
});

function autoAddClass(){
    var next = $(".active").removeClass("active").addClass("hidden").next();
    if(next.length)
        $(next).removeClass("hidden").addClass("active");
    else
        $("#fp1").removeClass("hidden").addClass("active");
    setTimeout(autoAddClass, 8000);
}
