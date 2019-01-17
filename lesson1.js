$(document).ready(function(){

    $("#button").click(function(){
        showInfo();
    })


});


var nounOne;
var nounTwo;
var nounThree;
var occupation1;
var verbOne;
var place;
var Verbed;
var nounFour;
var Verbing; 
var nounFive;
var nounSix;
var emotion;

function getInfo(){
    nounOne = $("#nounOne").val();
    nounTwo = $("#nounTwo").val();
    nounThree = $("#nounThree").val();
    occupation1 = $("#occupation1").val();
    verbOne = $("#verbOne").val();
    place = $("#place").val();
    Verbed = $("#Verbed").val();
    nounFour = $("#nounFour").val();
    Verbing = $("#Verbing").val();
    nounFive = $("#nounFive").val();
    nounSix = $("#nounSix").val();
    emotion = $("#emotion").val();
}

function showInfo(){
    getInfo();
    var message = "It was during the battle of " + nounOne + " when I was running through a " + nounTwo + " when a " + nounThree + " went off right next to my platoon. Our " + occupation1 + " yelled for us to " + verbOne + " to the nearest " + place + " we could find. " + Verbed + " When we got to the " + nounFour + " we " + Verbing + "  to start a fire. As we were starting the fire the enemy saw the " + nounFive + " from the fire and started " + nounSix + " " + emotion + " at us! " + "This Lib is from the website MadTakes! Thank you and I hopped you enjoyed!"

    $("#output").text(message)

}
