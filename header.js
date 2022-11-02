  
let sign = prompt("Are you having a great day?");

if (sign.toLowerCase() == "yes") {
    alert("Great! Glad to here :)");
}
else{
    alert("I am sorry to hear that, I hope it gets better!")
}


function swe(event){
    location.href = "http://ec2-50-16-177-186.compute-1.amazonaws.com/~roberto/"
};

document.getElementById("swe_button").addEventListener("swe", share, false);