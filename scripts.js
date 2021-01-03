console.log('in js');;

$(document).ready(handleReady);
let increment = 0;
function handleReady(){
    // renderToDom();
    //have items render on the DOM before beginning actions
    $(document).on('click', '#generateDiv', handleClicks)
}
//ready function created
function handleClicks (){
    //create a function to handle the functions used on click

     incrementor();
     createDiv();
     addP();
}


//create a function to render the results to the DOM
// function renderToDom(){
//     console.log('in RenderToDom');
//     $('#divSlot').empty();

// }

//create a function to increment the clicks made on each created DIV
function incrementor(){
    increment ++;
    console.log(increment);
    //place inside the handleClick to be triggered when Generate button is clicked
}

function createDiv(){
    //create a single Div element for each click
    $('#divSlot').append(`
    <div id = 'newDiv'></div>`);
}

function addP(){
    $("#newDiv").append(`
    <p> total count: ${increment}</p> 
    `)
}