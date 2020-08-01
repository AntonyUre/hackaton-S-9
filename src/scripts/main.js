function challenge1(){
    
    let a = document.getElementById("a-1").value;
    let b = document.getElementById("b-1").value;

    operation = parseInt(a) + parseInt(b);

    document.getElementById("reply1").value = operation;
}

function challenge2(){

    let a = document.getElementById("a-2").value;
    let b = document.getElementById("b-2").value;
    let c = document.getElementById("c-2").value;
    let d = document.getElementById("d-2").value;

    operation = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(c) / 4;

    document.getElementById("reply2").value = operation;
}

function challenge3(){

    let a = document.getElementById("a-3").value;
    let b = document.getElementById("b-3").value;

    operation = parseInt(a) * parseInt(b);

    document.getElementById("reply3").value = operation;
}

function challenge4(){

    let a = document.getElementById("a-4").value;
    let b = document.getElementById("b-4").value;

    operation = parseInt(a) * parseInt(b) / 2;

    document.getElementById("reply4").value = operation;
}

function challenge5(){

    let a = document.getElementById("a-5").value;
    const p = 3.14;

    operation = parseInt(a) * p;

    document.getElementById("reply5").value = operation;
}
function challenge5(){

    let a = document.getElementById("a-5").value;
    const p = 3.14;

    operation = parseInt(a) * p;

    document.getElementById("reply5").value = operation;
}
function challenge6(){

    let a = document.getElementById("a-6").value;
    const p = 10;

    operation = parseInt(a) * p;

    document.getElementById("reply6").value = operation;
}
function challenge7(){

    let a = document.getElementById("a-7").value;
    const p = 0.0254;

    operation = parseInt(a) / p;

    document.getElementById("reply7").value = parseInt(operation);
}
function challenge8(){

    let a = document.getElementById("a-8").value;
    const d = 3.52;

    operation = parseInt(a) / d;

    document.getElementById("reply8").value = parseInt(operation);
}
function challenge9(){

    let a = document.getElementById("a-9").value;
    const y = 2020;

    operation = y - parseInt(a);

    document.getElementById("reply9").value = operation;
}


function challenge11(){

    let y = document.getElementById("a-11").value;

    if (y <= 5) {
        operation = y * 100;
        document.getElementById("reply11").value = operation;
    }else{
        operation = 1000;
        document.getElementById("reply11").value = operation;
    }

}
function challenge15(){

    let a = document.getElementById("a-15").value;

    if (a >= 18) {
        operation = "Si puedes participar";
        document.getElementById("reply15").value = operation;
    }else{
        operation = "No puedes participar";
        document.getElementById("reply15").value = operation;
    }
    
}