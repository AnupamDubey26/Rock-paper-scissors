var first = document.getElementById("FirstName");
var last = document.getElementById("LastName");     

function welcome(){

    var welcomeF = "Welcome" + first +" "+ last;
    return welcomeF;

}

console.log(welcome());