function toggleNavMenu(){
    $('.header').toggleClass('menu-expanded');
    $('.top-menu').toggleClass('collapse');
}

$(window).on('load',function(){
    $('.toggle-nav').click(toggleNavMenu)
});


'use strict'

function submitFunction() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let types = document.getElementById("types").value;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("types").value = "";

    if(name == null || name == "") {
        alert("You did not enter a name");
        return;
    } else if(email == null || email == "") {
        alert("You did not enter an email");
        return;
    } else if(types == null || types == "") {
        alert("You did not enter a food type");
        return;
    }
  
    
	$(`#formResults`).append("<br>");
  	$(`#formResults`).append("Name: " + name);
   	$(`#formResults`).append("<br>");
	$(`#formResults`).append("Email: " + email);
    $(`#formResults`).append("<br>");
	$(`#formResults`).append("Types: " + types);
	$(`#formResults`).append("<br>");
}
