let moneyType = [20, 10, 5, 2, 1, .25, .10, .05, .01];

function calculateChange() {
    let due = document.getElementById('amount-due').value;
    let received = document.getElementById('amount-received').value;
    let result = received - due;
    return result;
}

function determineType(result) {
    let change = []
    moneyType.forEach(changeType => {
        if (changeType > result) {
            change.push(0)
        } else {
            change.push(Math.floor(result / changeType));
            result = (result % changeType).toFixed(2);
        }
    })
    return change;
}

function handleChangeCalculate() {
    let result = calculateChange();
    let change = determineType(result);
   //BONUS ADDED 20,10,5,2 dollars
    document.getElementById('20dollars-output').innerHTML = `${change[0]}`;
    document.getElementById('10dollars-output').innerHTML = `${change[1]}`;
    document.getElementById('5dollars-output').innerHTML = `${change[2]}`;
    document.getElementById('2dollars-output').innerHTML = `${change[3]}`;
    
    document.getElementById('dollars-output').innerHTML = `${change[4]}`;
    document.getElementById('quarters-output').innerHTML = `${change[5]}`;
    document.getElementById('dimes-output').innerHTML = `${change[6]}`;
    document.getElementById('nickels-output').innerHTML = `${change[7]}`;
    document.getElementById('pennies-output').innerHTML = `${change[8]}`;
}

