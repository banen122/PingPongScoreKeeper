
let p1={
    score:0,
    display:document.querySelector("#displayP1"),
    button:document.querySelector("#btnP1")
};
let p2={
    score:0,
    display:document.querySelector("#displayP2"),
    button:document.querySelector("#btnP2")
};

const btnReset=document.querySelector("#reset");
const winningScoreSelected=document.querySelector("#playTo");
let winningScore=3;
let isGameOver=false;


winningScoreSelected.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})
function updateScore(player,opponent){
    if(isGameOver!==true){
        player.score++;
        if(player.score===winningScore){
        if(opponent.score!=--winningScore){
         isGameOver=true;
         player.display.classList.add('has-text-success');
         opponent.display.classList.add('has-text-danger');
         player.button.disabled=true;
         opponent.button.disabled=true;
        }
        else{
            winningScore=winningScore+2;
        }
        }
        player.display.textContent=player.score;
    }
}

btnP1.addEventListener('click',function(){
   updateScore(p1,p2);
})
btnP2.addEventListener('click',function(){
    updateScore(p2,p1);
})
btnReset.addEventListener('click',reset);
function reset(){
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove("has-text-success","has-text-danger");
        p.button.disabled=false;

    }
    isGameOver=false;
}