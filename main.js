let moneyType = [20, 10, 5, 2, 1, .25, .10, .05, .01];
let ids = ['20dollars-output', '10dollars-output', '5dollars-output', '2dollars-output', 'dollars-output', 'quarters-output', 'dimes-output', 'nickels-output', 'pennies-output'];

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
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = 0;
        animateValue(ids[i], 0, change[i], 2000);
    }
}



function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}