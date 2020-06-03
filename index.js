var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);



var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);



if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player 2 Wins! 🚩";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent="🚩 Player 1 Wins!";
}else{
  document.querySelector("h1").textContent="Draw";
}






// function randDice(){
//
//  if (randomNumber1===1)(
//    document.querySelector("img1").setAttribute=("src","images/dice1");
//  )
//  else if (randomNumber1===2)(
//    document.querySelector("img1").setAttribute=("src","images/dice2");
//  )
// else if (randomNumber1===3)(
//    document.querySelector("img1").setAttribute=("src","images/dice3");
//  )
// else if (randomNumber1===4)(
//    document.querySelector("img1").setAttribute=("src","images/dice4");
//  )
//  else if (randomNumber1===5)(
//    document.querySelector("img1").setAttribute=("src","images/dice5");
//  )
// else if (randomNumber1===6)(
//    document.querySelector("img1").setAttribute=("src","images/dice6");
//  )
//
// }
//
