// This is problem 01

function calculateMoney(numberOfTicketSell ) {
    let number  = parseInt(numberOfTicketSell);
    console.log(number);
    if (number < 0) {
        throw new Error('problem 1: Number of tickets must be possitive');
    }
  
     const  priceOfOneTicket = 120;
     const  costForGuard = 500;
     const  forForLunchOftheStaff = 8*50;

     var total_earning = priceOfOneTicket*numberOfTicketSell;
     var total_cost = costForGuard+forForLunchOftheStaff;
     var finalBalance = total_earning-total_cost;

   //  console.log("Total cash on baker vais hand is: " + finalBalance);
   return finalBalance;
}

// here I am calling the funciton
// calculateMoney(10);




// problem number 02
function checkName(inputname) {
    if (typeof inputname != 'string') {
        throw new Error('Probelm 2: The input must be a string.');
    }

    let lastLetter = inputname.charAt(inputname.length - 1);
    if(lastLetter=='a'|lastLetter=='e'|lastLetter=='i'|lastLetter=='o'|lastLetter=='u'|lastLetter=='w'){
        // console.log("This is a good name!")
        return "Good name";
    }
    else {
       // console.log("This is a bad name!")
       return "bad name";

    }
}


//Input a name in strign format to check
// checkName("Anika")






// problem number 03
function deleteInvalids(arrayinput) {
    let pure_number = arrayinput.filter(item => typeof item === 'number' && !isNaN(item) && isFinite(item));
  //  console.log(pure_number);
  return pure_number;
}


//Calling the funciton to check if this is good
// deleteInvalids([0,5,undefined, true, 8,9,8,NaN,5,55]);




//Creating a test object so that i can pass it
// let pass= new Object();
// pass.name="kolimuddin";
// pass.birthYear="1999";
// pass.siteName="google";
// console.log(pass);



// problem number 04
function password(passObject) {
    personName=passObject.name;
    year=passObject.birthYear;
    sitename=passObject.siteName;
    sitenameProcessed=sitename.charAt(0).toUpperCase() + sitename.slice(1);
    let output =sitenameProcessed+'#'+personName+'@'+year;
   // console.log(output);
   return output;
}





//calling the actual funciton
// password(pass);