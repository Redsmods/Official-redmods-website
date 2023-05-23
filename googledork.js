$("#sortable").sortable({
  update: function(event, ui) {
    console.log("UPDATED");
    save();
  }
});

function load() {}

function save() {
  var saved = $("#sortable").sortable("serialize");
  localStorage.setItem("bookmarksKey", saved);
}
  
function elementCheck() {
  if ($("#sortable li").length > 9) {
    $(".btnAdd").hide();
  }
}

$(".btnAdd").click(function(e) {
  e.preventDefault();
  var text = "Boomark Link";
  var $li = $("<li id='bookmark_6'/> ");
  var $li2 = $(" <div class='icon'/>");
  var $li3 = $(" <img class='fIcon'  src='https://placekitten.com/120/100'/>");
  var $li4 = $("<div class=fText>" + text + "</div/>");
  $("#sortable").append($li);
  $($li2).appendTo($li);
  $($li3).appendTo($li2);
  $($li4).appendTo($li2);
  $("#sortable").sortable("refresh");
  elementCheck();
  save();
});
