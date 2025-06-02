const h=document.querySelectorAll("div.cells");
console.log(h);
/*document.getElementById("mybutton").addEventListener("click", function() {
        let player1 = this.value;
        var player2=(player1==="X")?"O":"X";
       var currentPlayer=player1;
});*/
let playerX="X";
let playerO="O";
 currentPlayer=playerX;
let count=0;
function disableClicks() {
    document.querySelectorAll("div.cells").forEach(cell => {
        cell.style.pointerEvents = "none"; // Prevent further clicks
    });
}
for(let i=0;i<9;i++){	
    h[i].addEventListener("click",function(){
        if(!h[i].classList.contains("O") && !h[i].classList.contains("X")){
        const u=document.querySelector("h2");
        u.textContent="turn of:"+currentPlayer;
	    currentPlayer=(currentPlayer===playerX? playerO:playerX);
		h[i].classList.add(currentPlayer);
        count++;
        checkwinner(currentPlayer,u,count);
        }
        //const u=document.querySelector("h2");
        //u.textContent="turn of:"+currentPlayer;

        //console.log(u);
});}

function checkwinner(c,i,count){
   if(count===9){
   i.textContent="tie";
   disableClicks();
   }
    if(h[0].classList.contains(c) && h[1].classList.contains(c) && h[2].classList.contains(c) ){
        i.textContent=c + "is the winner";
       disableClicks();
    }
 if(h[3].classList.contains(c) && h[4].classList.contains(c) && h[5].classList.contains(c) ){
        i.textContent=c + "is the winner";
       disableClicks();
    }
 if(h[6].classList.contains(c) && h[7].classList.contains(c) && h[8].classList.contains(c) ){
        i.textContent=c + "is the winner";
        disableClicks();
    }
 if(h[1].classList.contains(c) && h[4].classList.contains(c) && h[7].classList.contains(c) ){
        i.textContent=c + "is the winner";
  disableClicks();
    }
   if(h[0].classList.contains(c) && h[3].classList.contains(c) && h[6].classList.contains(c) ){
        i.textContent=c + "is the winner";
        disableClicks();
    }
    if(h[2].classList.contains(c) && h[5].classList.contains(c) && h[8].classList.contains(c) ){
        i.textContent=c + "is the winner";
disableClicks();
    }
 if(h[0].classList.contains(c) && h[4].classList.contains(c) && h[8].classList.contains(c) ){
        i.textContent=c + "is the winner";
disableClicks();
    }
   if(h[2].classList.contains(c) && h[4].classList.contains(c) && h[6].classList.contains(c) ){
        i.textContent=c + "is the winner";
disableClicks();
    }
}
//const cells = document.querySelectorAll("div.cells");

/*cells.forEach(cell => {
    cell.addEventListener("click", function() {
        this.classList.add("X"); // 'this' refers to the clicked cell
    });
});*/

