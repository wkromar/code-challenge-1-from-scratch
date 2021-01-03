console.log('in js');;

$(document).ready(handleReady);
let increment = 0;
function handleReady(){
    // renderToDom();
    //have items render on the DOM before beginning actions
    $(document).on('click', '#generateDiv', handleGenerateClicks)
    $(document).on("click", ".deleteButton", removeDiv);
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

//changing the class of the selected Div to change background color from red to yellow
function changeColor(){
    $(this).parent().removeClass('newDiv')
    $(this).parent().addClass('changeYellow')
}

function removeDiv(){
    $(this).parent().remove();
}

//I was very surprised at the amount of knowledge that I have picked up. my code is smoother.
// my troubleshooting is worlds apart at this current level and i enjoy solving them!
//thank you prime (and Dane), I feel gratitude and accomplishment. 