


// function press () {
press = () => {
    
    const play1 = Math.floor(Math.random() * 6) + 1 ;
    const playDiceImg = `dice-${play1}-removebg-preview.png`;
    document.getElementById("check1").setAttribute("src", playDiceImg);
    
    const play2 = Math.floor(Math.random() * 6) + 1 ;
    const playDiceImg2 = `dice-${play2}-removebg-preview.png`;
    document.getElementById("check2").setAttribute("src", playDiceImg2);
    
    if (play1 > play2) {
        document.getElementById('anser').innerHTML="Player1 won";
    } else if (play2 > play1) {
        document.getElementById("anser").innerHTML="Player2 won";
    } else {
        document.getElementById("anser").innerHTML="DRAW";
    }
    
    
}
// }

// var btnClick = document.getElementsByClassName("b-t-as")[0];
// var imgopacity = document.getElementsByClassName('opa')[0]; 
// var imgopacity2 = document.getElementsByClassName('opa2')[0]; 

// btnClick.addEventListener( "click" ,  function() {
//    imgopacity.classList.toggle("true");
// });
// btnClick.addEventListener( "click" ,  function() {
//    imgopacity2.classList.toggle("true");
// });





