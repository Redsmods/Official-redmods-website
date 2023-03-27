function checkprice() {
  var pricebox = document.getElementById("price-box");
  var annually = document.getElementsByClassName("annually-price");
  var monthly = document.getElementsByClassName("monthly-price");

  for (var i = 0; i < annually.length; i++) {
    if (pricebox.checked == true) {
      annually[i].style.display = "block";
      monthly[i].style.display = "none";
    } else if (pricebox.checked == false) {
      annually[i].style.display = "none";
      monthly[i].style.display = "block";
    }
  }
}
checkprice();
