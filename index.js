var randomNumber_1 = Math.floor(Math.random()*6)+1;
var randomDiceImg_1 = "dice"+randomNumber_1+".png";
var randomImgSource_1 = "images/"+randomDiceImg_1;
var img_1= document.querySelectorAll("img")[0];
    img_1.setAttribute("src",randomImgSource_1);


var randomNumber_2 = Math.floor(Math.random()*6)+1;
var randomDiceImg_2 = "dice"+randomNumber_2+".png";
var randomImgSource_2 = "images/"+randomDiceImg_2;
var img_2= document.querySelectorAll("img")[1];
img_2.setAttribute("src",randomImgSource_2);


if (randomNumber_1 > randomNumber_2) {
document.querySelector("h1").innerHTML="Player 1 Wins !!";
} 
else if (randomNumber_1 < randomNumber_2){
    document.querySelector("h1").innerHTML="Player 2 Wins !!";
}
else{
    document.querySelector("h1").innerHTML="DRAW !";
}

 