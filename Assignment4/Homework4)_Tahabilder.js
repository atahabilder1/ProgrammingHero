// This is problem 01

function calculateMoney(numberOfTicketSell ) {
     const  priceOfOneTicket = 120;
     const  costForGuard = 500;
     const  forForLunchOftheStaff = 8*50;

     var total_earning = priceOfOneTicket*numberOfTicketSell;
     var total_cost = costForGuard+forForLunchOftheStaff;
     var finalBalance = total_earning-total_cost;

    console.log("Total cash on baker vais hand is: " + finalBalance);
}

// here I am calling the funciton
calculateMoney(1055);




// problem number 02
function checkName(inputname) {
    let lastLetter = inputname.charAt(inputname.length - 1);
    if(lastLetter=='a'|lastLetter=='e'|lastLetter=='i'|lastLetter=='o'|lastLetter=='u'|lastLetter=='w'){
        console.log("This is a good name!")
    }
    else {
        console.log("This is a bad name!")

    }
}


//Calling the funciton to check if this is good
checkName("Anika")






// problem number 03
function deleteInvalids(arrayinput) {
    let pure_number = arrayinput.filter(item => typeof item === 'number' && !isNaN(item) && isFinite(item));
    console.log(pure_number);
}


//Calling the funciton to check if this is good
deleteInvalids([0,5,undefined, true, 8,9,8,NaN,5,55]);




//Creating a test object so that i can pass it
let pass= new Object();
pass.name="kolimuddin";
pass.birthYear="1999";
pass.siteName="google";
console.log(pass);



// problem number 04
function password(passObject) {
    personName=passObject.name;
    year=passObject.birthYear;
    sitename=passObject.siteName;
    let output =sitename+'#'+personName+'@'+year;
    console.log(output);
}





//calling the actual funciton
password(pass);