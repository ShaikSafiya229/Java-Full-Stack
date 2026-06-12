function greet_afternoon(){
    let text = document.getElementById("greet");
    text.innerHTML="Good afternoon";
}
function turn_on(){
    let light = document.getElementById("on");
    light.src="turnon.jpg";
}
function turn_off(){
    let light = document.getElementById("on");
    light.src="turnoff.jpg";
}
let themeDark = false;
function change_color(){
    let page = document.getElementById("cap");
    let heading = document.getElementById("Data");
    let greet = document.getElementById("greet");

    if (!themeDark) {
        page.style.backgroundColor = "black";
        heading.style.color = "white";
        greet.style.color = "pink";
    } else {
        page.style.backgroundColor = "white";
        heading.style.color = "black";
        greet.style.color = "black";
    }

    themeDark = !themeDark;
}
