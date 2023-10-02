let turn = 'O'
let gameOver = false;
let gameStarted = false;

let subContainer = document.querySelector('.subContainer');
let message = document.querySelector('.message');

const SwitchTurn = () => {
    return turn === 'O' ? 'X' : 'O';
};

const WinCheck = () => {
    let box = document.getElementsByClassName('box');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    let winner = null; 

    wins.forEach(ele => {
        if ((box[ele[0]].innerText === box[ele[1]].innerText) && (box[ele[1]].innerText === box[ele[2]].innerText) && (box[ele[1]].innerText !== '')) {
            document.querySelector('.turn').innerText = box[ele[0]].innerText + ' is Winner Congratulations! ';
            winner = box[ele[0]].innerText;
            gameOver = true;
            subContainer.classList.add('hidden');
            message.classList.remove('hidden');
        }
    });

    if (!winner && Array.from(box).every(element => element.innerText !== '')) {
        document.querySelector('.turn').innerText = 'Draw! Try again';
        gameOver = true;
    }
};


let boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (gameStarted && box.innerText === '') {
            box.innerText = turn;
            turn = SwitchTurn();
            WinCheck();
            if(!gameOver){
                document.querySelector('.turn').innerText = 'Turn for ' + turn;
            }    
        }
    });
});

document.getElementById('start').addEventListener('click', () => {
    gameStarted = true;
    start.classList.add('bg-white');
});


document.getElementById('again').addEventListener('click', () => {
    let box = document.querySelectorAll('.box');
    Array.from(box).forEach(element => {
        element.innerText = ''
    });

    turn = 'O';
    gameOver = false;
    gameStarted = false;
    start.classList.remove('bg-white');
    document.querySelector('.turn').innerText = 'Turn for ' + turn;
    subContainer.classList.remove('hidden');
    message.classList.add('hidden');
});