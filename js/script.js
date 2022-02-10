function areyou() {
    var question = Math.floor(Math.random() * 10);
    var yes = "";

    if (question%2 == 0)
		var yes = "rgb(255, 0, 0)";
	else
		var yes = "rgb(0,255,0)";

    document.body.style.background = yes;
    if(yes == "rgb(255, 0, 0)")
        document.getElementById("body").innerHTML = "NO";
    else
        document.getElementById("body").innerHTML = "Yes!";

}