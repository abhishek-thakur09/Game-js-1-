let buttons = document.querySelectorAll(".cell");
let reset = document.querySelector("#reset");


let players = ['X','O'];
let currentPlayer= players[0];

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];


const handleClick = (e) => {

    const cell = e.target;
        if(cell.textContent !== ''){
            return;
        }
        else{
            cell.textContent = currentPlayer;
        }

        console.log(cell);


        if(checkWin(currentPlayer)){
            setTimeout(()=> alert(`${currentPlayer} wins!`), 100);
            buttons.forEach(e => e.removeEventListener('click', handleClick))
            return;
        }

        if(Array.from(buttons).every(e => e.textContent !== '')){
            setTimeout(()=> alert('its draw!'), 10);
            return;
        }

        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
}



function checkWin(currentPlayer){
    for(let i of winningCombinations){
        const [a,b,c] = i;
        if(buttons[a].textContent === currentPlayer && buttons[b].textContent === currentPlayer && buttons[c].textContent === currentPlayer){
            return true;
        }
    }
    return false;
}


const resetGame = () =>{
        if(checkWin){
           buttons.forEach(button => button.textContent = '');
           buttons.forEach(button => button.addEventListener('click', handleClick));
           currentPlayer = players[0]; 
        }
}

buttons.forEach(e => e.addEventListener('click', handleClick));
reset.addEventListener('click', resetGame);

console.log(buttons);
