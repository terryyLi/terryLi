function showNavi() {
  var x = document.getElementById("navbar");
  if (x.className === "navi") {
    x.className += " responsive";
  } else {
    x.className = "navi";
  }
}
