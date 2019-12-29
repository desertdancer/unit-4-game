//Crystal Game
// image prov in instructions...how to use--Just inspiration

// re image--is this how to demo how jQ can help?

var wins = 0;
var losses = 0;
var guessesSoFar = 0;//current score
var randomNumberToMatch = 0;//target score
var randomCrystal1 = 0;
var randomCrystal2 = 0;
var randomCrystal3 = 0;
var randomCrystal4 = 0;



refresh();
function refresh() {
    $("#wins").html(wins);
    $("#losses").html(losses);

}


resetRandomNumber();
function resetRandomNumber() {
    guessesSoFar = 0;
    $("#playertotal").html(guessesSoFar);//applying logic to my solution
    randomCrystal1 = Math.floor(Math.random() * 12) + 1;//logic
    randomCrystal2 = Math.floor(Math.random() * 12) + 1;
    randomCrystal3 = Math.floor(Math.random() * 12) + 1;
    randomCrystal4 = Math.floor(Math.random() * 12) + 1;
    randomNumberToMatch = Math.floor(Math.random() * 100) + 20;
    console.log(randomNumberToMatch)
    $("#computer").html(randomNumberToMatch)
}




//Need Clk Event for Buttons//add all random variables like I did in reset random numbers?
$(".crystals").on("click", function () {
console.log ($(this).attr("value"))
var crystal = $(this).attr("value")

if (crystal === "1"){
    guessesSoFar = guessesSoFar + randomCrystal1;
}
else if (crystal === "2" ){
    guessesSoFar = guessesSoFar + randomCrystal2;

}else if (crystal === "3"){
    guessesSoFar = guessesSoFar + randomCrystal3;
}else { guessesSoFar = guessesSoFar + randomCrystal4;}
$("#playertotal").html(guessesSoFar)
if (guessesSoFar === randomNumberToMatch){
    wins++ 
    $("#wins").html(wins);
    resetRandomNumber()
}
else if (guessesSoFar>randomNumberToMatch){ 
    losses++
    $("#losses").html(losses);
  resetRandomNumber()
}
})


//$(document).ready(function(){
//
//    $("diamondImage").click(function(){
//        guessesSoFar = guessesSoFar + randomCrystal1;
//    })

//}





//find How jquery detects something is clikd on
//Refresh needs to be cleaned up
