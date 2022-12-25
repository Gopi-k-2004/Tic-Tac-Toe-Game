console.log("welcome to tic tac toe game");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn ="x";
let finish=false;

const changeTurn = () =>{
    return turn ==="x"? "o":"x";
}

// function to check win
const checkWin = () =>{

    let boxtext = document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,10,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
        
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && boxtext[e[0]].innerText!==''){

            document.querySelector(".info").innerText=boxtext[e[0]].innerText+ " won";
            finish=true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = '20vw'
            gameover.play();
        }
    })
    
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    
    // here array.from(x) means x is an object which will be converted into a array.
    // The Javascript Array.from() method is used to create a new array instance from a given array. 
    // In the case of a string, every alphabet of the string is converted to an element of the new array
    
    // here element is an iterator. 
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(finish!=true){
                document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
            }
            
        }
    })
})

// to restart the game-reset button

reset.addEventListener("click",()=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    })
    turn = "x";
    finish=false;
    document.querySelector(".line").style.width = '0vw'
    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";


})