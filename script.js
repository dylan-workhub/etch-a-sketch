const etchWrapper = document.querySelector('#etch-wrapper');
const resetBtn = document.querySelector('#gridReset');
const tileBtn = document.querySelector('#gridTiles');
const rainbowBtn = document.querySelector('#rainbow');
let isRainbow = false;
let etchRow;
let etchColumn;
let newGridNum;

//reset grid color
function gridReset(){
    let gridList = document.querySelectorAll('.column');
    gridList.forEach((div) => {
        div.style.backgroundColor = '#fbf7f5';
    });
};

//drawing function
function drawOnGrid(){
    let divList = document.querySelectorAll('.column');
    divList.forEach((div) => {
        if(isRainbow){
            console.log('israinbow');
            div.addEventListener('mouseover', function(e){
                let randRed = Math.floor((Math.random() * 256) + 1);
                let randBlue = Math.floor((Math.random() * 256) + 1);
                let randGreen = Math.floor((Math.random() * 256) + 1);
                e.target.style.backgroundColor = `rgb(${randRed}, ${randBlue}, ${randGreen})`;
            });
        }
        else{
            div.addEventListener('mouseover', function(e){
                e.target.style.backgroundColor = `black`;
            });
        };
    });
};

//num tiles button & function
function gridSize(){
    let gridToDelete = document.querySelectorAll('.row');
    newGridNum = document.querySelector('#numBoxes').value;
    gridToDelete.forEach((div) =>{
        div.parentNode.removeChild(div);
    });

    for(let i = 0; i < newGridNum; i++){
        etchRow = document.createElement('div');
        etchRow.classList.add('row');
        etchWrapper.appendChild(etchRow);
        for(let j = 0; j < newGridNum; j++){
            etchColumn = document.createElement('div');
            etchColumn.classList.add('column');
            etchRow.appendChild(etchColumn);
        }
    }

    drawOnGrid();
};

//check for rainbow
function rainbow(){
    if(isRainbow){
        isRainbow = false;
    }
    else{
        isRainbow = true;
    }
    drawOnGrid();
}

//initial grid
for(let i = 0; i < 16; i++){
    etchRow = document.createElement('div');
    etchRow.classList.add('row');
    etchWrapper.appendChild(etchRow);
    for(let x = 0; x < 16; x++){
        etchColumn = document.createElement('div');
        etchColumn.classList.add('column');
        etchRow.appendChild(etchColumn);
    }
}

//initial call on load
let hoverList = document.querySelectorAll('.column');
drawOnGrid();

//button stuff
resetBtn.addEventListener('click', gridReset);

rainbowBtn.addEventListener('click', rainbow);

tileBtn.addEventListener('click', gridSize);