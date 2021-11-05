//CONSTANTS -- BONUS ADDED 20, 10, 5, 2 dollars
let moneyType = [20, 10, 5, 2, 1, .25, .10, .05, .01];
let ids = ['20dollars-output', '10dollars-output', '5dollars-output', '2dollars-output', 'dollars-output', 'quarters-output', 'dimes-output', 'nickels-output', 'pennies-output'];

//solves for how much change will be returned
function calculateChange() {
    //get amount due and received from user
    let due = document.getElementById('amount-due').value;
    let received = document.getElementById('amount-received').value;
    let result = received - due;
    return result;
}

//determines the bill and coin denomination
function determineType(result) {
    let change = []
    //loop through each money denomination find out the quantity of each
    moneyType.forEach(changeType => {
        //if the change is less than the denomination value, push a 0 in the array
        if (changeType > result) {
            change.push(0)
        } else {
            //divide the change into the denomination value, push the quotient
            change.push(Math.floor(result / changeType));
            //Modulo the change with the denomination value, the remainder will be the new result
            result = (result % changeType).toFixed(2);
        }
    })
    return change;
}

//execute on click
function handleChangeCalculate() {
    let result = calculateChange();
    let change = determineType(result);
    //for all ids in the array start at 0 and run the animate function for 2000ms
    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).innerHTML = 0;
        animateValue(ids[i], 0, change[i], 2000);
    }
}

//BONUS -- ANIMATES THE NUMBERS
function animateValue(id, start, end, duration) {
    //if the change quantity for the denomination is 0
    if (start === end) return;
    //find the range
    var range = end - start;
    var current = start;
    //increase by 1
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    //get the id of the element needing to be changed
    var obj = document.getElementById(id);
    var timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}