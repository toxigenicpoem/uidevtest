$(document).ready(function() {
  $("a.type").click(function () {
    $("#coltwo p").toggleClass("article-large-font");
    $(this).toggleClass("plus").toggleClass("minus").text($(this).text() == "Larger type" ? "Smaller type" : "Larger type");
    return false;
  });
});
