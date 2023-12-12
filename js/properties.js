let twoTemp;
let twoDist;
let twoWeight;
function showTemp() {
    const inputA = document.getElementById('dropdownDistIn');
    inputA.style.display='none';
    const outputA = document.getElementById('dropdownTempIn');
    outputA.style.display='block';
    const inputB = document.getElementById('dropdownDistOut');
    inputB.style.display='none';
    const outputB = document.getElementById('dropdownTempOut');
    outputB.style.display='block';
    const inputC = document.getElementById('dropdownWeightIn');
    inputC.style.display='none';
    const outputC = document.getElementById('dropdownWeightOut');
    outputC.style.display='none';
    
    const otherCalA = document.getElementById('calculateDist');
    otherCalA.style.display='none';
    const inputCal = document.getElementById('calculateTemp');
    inputCal.style.display='block';
    const otherCalB = document.getElementById('calculateWeight');
    otherCalB.style.display='none';
}

function showDist() {
    const inputA = document.getElementById('dropdownDistIn');
    inputA.style.display='block';
    const outputA = document.getElementById('dropdownTempIn');
    outputA.style.display='none';
    const inputB = document.getElementById('dropdownDistOut');
    inputB.style.display='block';
    const outputB = document.getElementById('dropdownTempOut');
    outputB.style.display='none';
    const inputC = document.getElementById('dropdownWeightIn');
    inputC.style.display='none';
    const outputC = document.getElementById('dropdownWeightOut');
    outputC.style.display='none';
    

    const inputCal = document.getElementById('calculateDist');
    inputCal.style.display='block';
    const otherCalA = document.getElementById('calculateTemp');
    otherCalA.style.display='none';
    const otherCalB = document.getElementById('calculateWeight');
    otherCalB.style.display='none';
}

function showWeight() {
    const inputA = document.getElementById('dropdownDistIn');
    inputA.style.display='none';
    const outputA = document.getElementById('dropdownTempIn');
    outputA.style.display='none';
    const inputB = document.getElementById('dropdownDistOut');
    inputB.style.display='none';
    const outputB = document.getElementById('dropdownTempOut');
    outputB.style.display='none';
    const inputC = document.getElementById('dropdownWeightIn');
    inputC.style.display='block';
    const outputC = document.getElementById('dropdownWeightOut');
    outputC.style.display='block';
    
    const inputCal = document.getElementById('calculateWeight');
    inputCal.style.display='block';
    const otherCalA = document.getElementById('calculateTemp');
    otherCalA.style.display='none';
    const otherCalB = document.getElementById('calculateDist');
    otherCalB.style.display='none';
}

function calculateTemp() {
    let one = document.getElementsByName("tempIn");
    twoTemp = document.getElementsByName('tempOut');
    for (i = 0; i < one.length; i++) {
        if (one[i].checked)
            one = one[i].value;
    }
    for (i = 0; i < twoTemp.length; i++) {
        if (twoTemp[i].checked)
            twoTemp = twoTemp[i].value;
    }
           switch(one) {
                case 'cel':
                    celIn();
                    break;
                case 'fah':
                    fahIn();
                    break;
            }
       
    }

    function calculateDist() {
    let one = document.getElementsByName("distIn");
    twoDist = document.getElementsByName("distOut");
    for (i = 0; i < one.length; i++) {
        if (one[i].checked)
            one = one[i].value;
    }
    for (i = 0; i < twoDist.length; i++) {
        if (twoDist[i].checked)
            twoDist = twoDist[i].value;
    }

    switch(one) {
        case 'meters':
            meterIn();
            break;
        case 'feet':
            feetIn();
            break;
        case 'kilometers':
            kiloIn();
            break;
        case 'miles':
            milesIn();
            break;

         }

    }

function calculateWeight() {
    let one = document.getElementsByName("weightIn");
    twoWeight = document.getElementsByName("weightOut");
        for (i = 0; i < one.length; i++) {
            if (one[i].checked)
                one = one[i].value;
        }
        for (i = 0; i < twoWeight.length; i++) {
            if (twoWeight[i].checked)
                twoWeight = twoWeight[i].value;
        }
       
        switch(one) {
            case 'kilog':
                kilogIn();
                break;
            case 'pounds':
                poundIn();
                break;
            case 'grams':
                gramIn();
                break;
            case 'ounces':
                ounceIn();
                break;
    
        }
    
}

function kilogIn() {
    let value=document.getElementById("weightInVal");
    let kilos=value.value;

    switch(twoWeight) {
        case 'kilog':
            document.getElementById('resultWeight').innerHTML = kilos;
            break;
        case 'pounds':
            let totalA= kilos * 2.20462;
            document.getElementById('resultWeight').innerHTML = totalA;
            break;
        case 'grams':
            let totalB = kilos * 1000;
            document.getElementById('resultWeight').innerHTML = totalB;
            break;
        case 'ounces':
            let totalC = kilos * 35.274;
            document.getElementById('resultWeight').innerHTML = totalC;
            break;
    }
}

function poundIn() {
    let value=document.getElementById("weightInVal");
    let pounds=value.value;

    switch(twoWeight) {
        case 'kilog':
            let totalA=pounds*0.453592;
            document.getElementById('resultWeight').innerHTML = totalA;
            break;
        case 'pounds':
            document.getElementById('resultWeight').innerHTML = pounds;
            break;
        case 'grams':
            let totalB = pounds * 453.592;
            document.getElementById('resultWeight').innerHTML = totalB;
            break;
        case 'ounces':
            let totalC = pounds * 16;;
            document.getElementById('resultWeight').innerHTML = totalC;
            break;
    }
}

function gramIn() {
    let value=document.getElementById("weightInVal");
    let grams=value.value;

    switch(twoWeight) {
        case 'kilog':
            let totalA=grams * 0.001;
            document.getElementById('resultWeight').innerHTML = totalA;
            break;
        case 'pounds':
            let totalB=grams * 0.00220462;
            document.getElementById('resultWeight').innerHTML = totalB;
            break;
        case 'grams':
            document.getElementById('resultWeight').innerHTML = grams;
            break;
        case 'ounces':
            let totalC = grams * 0.035274;;
            document.getElementById('resultWeight').innerHTML = totalC;
            break;
    }
}

function ounceIn() {
    let value=document.getElementById("weightInVal");
    let ounces=value.value;

    switch(twoWeight) {
        case 'kilog':
            let totalA=ounces * 0.0283495;
            document.getElementById('resultWeight').innerHTML = totalA;
            break;
        case 'pounds':
            let totalB=ounces * 0.0625;
            document.getElementById('resultWeight').innerHTML = totalB;
            break;
        case 'grams':
            let totalC= ounces * 28.3495;
            document.getElementById('resultWeight').innerHTML = totalC;
            break;
        case 'ounces':
            document.getElementById('resultWeight').innerHTML = ounces;
            break;
    }
}

function meterIn() {
    let value=document.getElementById("distInVal");
    let meters=value.value;

    switch(twoDist) {
        case 'meters':
            document.getElementById('resultDist').innerHTML = meters;
            break;
        case 'feet':
            let totalA= meters  * 3.28084;
            document.getElementById('resultDist').innerHTML = totalA;
            break;
        case 'kilometers':
            let totalB = meters * 0.001;
            document.getElementById('resultDist').innerHTML = totalB;
            break;
        case 'miles':
            let totalC = meters * 0.000621371;
            document.getElementById('resultDist').innerHTML = totalC;
            break;
    }
  
}

function feetIn() {
    let value=document.getElementById("distInVal");
    let feet=value.value;
    switch(twoDist) {
        case 'meters':
            let totalA = feet * 0.3048;
            document.getElementById('resultDist').innerHTML = totalA;
            break;
        case 'feet':
            document.getElementById('resultDist').innerHTML = feet;
            break;
        case 'kilometers':
            let totalB = feet * 0.0003048;
            document.getElementById('resultDist').innerHTML = totalB;
            break;
        case 'miles':
            let totalC = feet * 0.000189394;
            document.getElementById('resultDist').innerHTML = totalC;
            break;
    }
}

function kiloIn() {
    let value=document.getElementById("distInVal");
    let kilo=value.value;
    switch(twoDist) {
        case 'meters':
            let totalA = kilo * 1000;
            document.getElementById('resultDist').innerHTML = totalA;
            break;
        case 'feet':
            let totalB= kilo * 3280.84;
            document.getElementById('resultDist').innerHTML = totalB;
            break;
        case 'kilometers':
            document.getElementById('resultDist').innerHTML = kilo;
            break;
        case 'miles':
            let totalC = kilo * 0.621371;
            document.getElementById('resultDist').innerHTML = totalC;
            break;
    }
}

function milesIn() {
    let value=document.getElementById("distInVal");
    let mile=value.value;
    switch(twoDist) {
        case 'meters':
            let totalA = mile * 1609.34;
            document.getElementById('resultDist').innerHTML = totalA;
            break;
        case 'feet':
            let totalB = mile * 5280;
            document.getElementById('resultDist').innerHTML = totalB;
            break;
        case 'kilometers':
            let totalC = mile * 1.60934;
            document.getElementById('resultDist').innerHTML = totalC;
            break;
        case 'miles':
            document.getElementById('resultDist').innerHTML = mile;
            break;
    }
}


function celIn() {
    let value=document.getElementById('tempInVal');
    let cel=value.value;
    switch(twoTemp) {
        case 'cel':
            document.getElementById('resultTemp').innerHTML = cel;
            break;
        case 'fah':
            let totalA = (cel * (9/5)) +32;
            document.getElementById('resultTemp').innerHTML = totalA;
            break;
    }
}

function fahIn() {
    let value=document.getElementById('tempInVal');
    let fah=value.value;
    switch(twoTemp) {
        case 'cel':
            let totalA = (fah - 32) * (5/9);
            document.getElementById('resultTemp').innerHTML = totalA;
            break;
        case 'fah':
            document.getElementById('resultTemp').innerHTML = fah;
            break;
    }
}