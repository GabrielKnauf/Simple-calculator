function insertToDisplay(data){
    document.querySelector("#display").value += data;
}

function clean(){
    document.querySelector("#display").value = '';
}

function back(){
    let display =  document.querySelector("#display");
    display.value = display.value.slice(0, -1);
}   

function result(){
    let display =  document.querySelector("#display");
    try{
        display.value = eval(display.value);
    } catch{
        display.value = "Error";
    }
}