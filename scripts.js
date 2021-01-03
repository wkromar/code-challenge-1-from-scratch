console.log('in js');;

$(document).ready(handleReady);
let increment = 0;
function handleReady(){
    // renderToDom();
    //have items render on the DOM before beginning actions
    $(document).on('click', '#generateDiv', handleGenerateClicks)
    // $(document).on("click", ".deleteButton", removeDiv);
    $(document).on("click", ".yellowButton", changeColor);
}
//ready function created
function handleGenerateClicks (){
    //create a function to handle the functions used on click
     createDiv();
    incrementor();
     
}


//create a function to increment the clicks made on each created DIV
function incrementor(){
    increment ++;
    console.log(increment);
    //place inside the handleClick to be triggered when Generate button is clicked
}

function createDiv(){
    //create a single Div element for each click
    $('#divSlot').append(`
    <div id = 'newDiv' class = 'startRed'>
    <p> total count: ${increment}</p> 
    <button class = 'yellowButton'>Yellow</button>
    <button class = 'deleteButton'>Delete</button>
    </div>`);
}



function changeColor(){
    $(this).parent().removeClass('newDiv')
    $(this).parent().addClass('changeYellow')
}