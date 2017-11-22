$(document).ready(function(){
  $(".Itinerary").on("click", function(){
    console.log("clicked itinerary");
    $("#activebutton").removeAttr("id");
    $(".Itinerary").attr("id", "activebutton")
    $(".active.articlecontent").removeClass("active").addClass("hidden")
    $(".articlecontent.itinerarycontent").removeClass("hidden").addClass("active")
  })
  $(".Eat").on("click", function(){
    console.log("clicked eat")
    $("#activebutton").removeAttr("id");
    $(".Eat").attr("id", "activebutton")
    $(".active.articlecontent").removeClass("active").addClass("hidden")
    $(".articlecontent.eatcontent").removeClass("hidden").addClass("active")
  })
  $(".Stay").on("click", function(){
    console.log("clicked stay")
    $("#activebutton").removeAttr("id");
    $(".Stay").attr("id", "activebutton")
    $(".active.articlecontent").removeClass("active").addClass("hidden")
    $(".articlecontent.staycontent").removeClass("hidden").addClass("active")
  })
  $(".Getaround").on("click", function(){
    console.log("clicked getaround")
    $("#activebutton").removeAttr("id");
    $(".Getaround").attr("id", "activebutton")
    $(".active.articlecontent").removeClass("active").addClass("hidden")
    $(".articlecontent.getaroundcontent").removeClass("hidden").addClass("active")
  })
  $(".See").on("click", function(){
    console.log("clicked see")
    $("#activebutton").removeAttr("id");
    $(".See").attr("id", "activebutton")
    $(".active.articlecontent").removeClass("active").addClass("hidden")
    $(".articlecontent.seecontent").removeClass("hidden").addClass("active")
  })
  $(".Do").on("click", function(){
    console.log("clicked do")
    $("#activebutton").removeAttr("id");
    $(".Do").attr("id", "activebutton")
    $(".active.articlecontent").removeClass("active").addClass("hidden")
    $(".articlecontent.docontent").removeClass("hidden").addClass("active")
  })
});
