let cells=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let win=document.querySelector(".winner");
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
let nextTurn="X";
let click=false;
for(let i of cells){
    i.addEventListener("click",()=>{
        if(!click){
            i.innerText="O";
            click=true;
        }
        else{
            i.innerText="X";
            click=false;
        }
    i.disabled=true;
    checkWinner();
})
}
reset.addEventListener("click",() => {
    location.reload();
})
const disableBoxes =() =>{
    for(let i of cells){
        i.disable=true;
    }
}
const checkWinner = () => {
    let winnerFound = false;

    for (let i of winpattern) {
        let pos1 = cells[i[0]].innerText;
        let pos2 = cells[i[1]].innerText;
        let pos3 = cells[i[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                // Winner!
                cells[i[0]].style.backgroundColor = "green";
                cells[i[1]].style.backgroundColor = "green";
                cells[i[2]].style.backgroundColor = "green";
                win.innerText = `Winner is: ${pos1}`;
                winnerFound = true;
                disableBoxes();
                for(let j of cells){
                    j.innerText=="";
                    j.disabled=true;
                }
            }
        }
    }
    /*1,2,6,3,7,4,8,9 tie pattern*/
    if (!winnerFound) {
        let allFilled = true;

        for(let i of cells){
            if(i.innerText==""){
                allFilled=false;
            }
        }

        if (allFilled) {
            win.innerText = "Tied!";
        }
    }
};


/*

*/