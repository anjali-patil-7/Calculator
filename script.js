
function buttonClick(val) {
    document.getElementById("display").value += val;
}

function clearScreen() {
    document.getElementById("display").value = "";
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function equalclick(){
    var text=document.getElementById("display").value;
    var result=eval(text)
    document.getElementById("display").value=result
}
