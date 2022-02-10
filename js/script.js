function areyou() {
  var question = Math.floor(Math.random() * 33);
  var color = "";

  if (question%5 == 0){
    var color = "rgb(255, 0, 0)"
  }
  else if(question%2 == 0)
  {
  var color = "rgb(0, 255, 0)"
  }
  else{
  var color = "rgb(255, 191, 0)"

  }


  document.body.style.background = color;

  if(color == "rgb(255, 0, 0)"){
      document.getElementById("body").innerHTML = "NO";
      document.title = "Are You?? NO";
  }
  else if(color == "rgb(255, 191, 0)"){
    document.getElementById("body").innerHTML = "MaYBe?";
    document.title = "Are You?? MaYBe?";
  }else{
      document.getElementById("body").innerHTML = "Yes!";
      document.title = "Are You?? Yes!";
  }
}