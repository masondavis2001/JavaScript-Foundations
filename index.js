// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/





// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

(1) Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
(2) Create another variable called `periods` and give it the value of years*12.
*/



// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe (also below) to run calculations on your numbers. 
Save the final value into a variable called monthlyRate. 
M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

Hint: while these calculations can be done in one line, it might be helpful to create seperate variables to hold parts of your equation. 
That might look like this:

(1) Create a variable called n1 and set it equal to  (1 + I )^N
(2) Create a variable called n2 and set it equal to n1 * I
(3) Create a variable called numerator and set it equal to n1 * n2 
(4) Create a variable called denominator and set it equal to n1 - 1 
(5) Create a variable called monthlyRate and set it equal to numerator/denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/



// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/





// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/





// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit 
score is anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, to increase an interest rate by 5% you'd do monthlyRate * 1.05.
*/




// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:



*/




// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */



const customMortgageCalculator = function (principal, interestRate, numberOfYears) {
    let monthlyInterestRate = interestRate / 12;
    let n1 = Math.pow((1 + monthlyInterestRate), (numberOfYears * 12));
    let numerator = n1 * monthlyInterestRate;
    let denominator = n1 - 1;
    let monthlyRate = principal * (numerator / denominator);

    return `${monthlyRate.toFixed(2)}`;

};

const defaultMortgageCalculator = function () {
    let monthlyRate = customMortgageCalculator(200000, .05, 30);
    let name = 'Mason';

    //don't need now because of code reuse after refactor (moved customMortgageCalculator first so others can call)

    // let monthlyInterestRate = interestRate / 12
    // let periods = years * 12;
    // let n1 = Math.pow((1 + monthlyInterestRate), periods);
    // let numerator = n1 * monthlyInterestRate;
    // let denominator = n1 - 1;
    // let monthlyRate = principal * (numerator / denominator);

    return `${name} your monthly rate is $${monthlyRate}`;
};

const variableMortgageRateCalculator = function (principal, interestRate, numberOfYears, creditScore) {
    let initialRate = customMortgageCalculator(principal, interestRate, numberOfYears);
    let finalMonthlyRate = initialRate;

    if (creditScore <= 740 && creditScore >= 660)
        finalMonthlyRate = initialRate
    else if (creditScore > 740)
        finalMonthlyRate = (initialRate * .95).toFixed(2);
    else if (creditScore < 660)
        finalMonthlyRate = (initialRate * 1.05).toFixed(2);

    return finalMonthlyRate;
};

const multipleInterestRateMortgageCalculator = function () {
    var intRates = [0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055, 0.06];
    var name = 'Mason';

    intRates.forEach(element => {
        console.log(`${name}, with an interest rate of ${element}, your monthly rate is ${customMortgageCalculator(200000, element, 30)}`);
    });
}




console.log(defaultMortgageCalculator());

console.log(customMortgageCalculator(200000, .05, 30));

console.log(variableMortgageRateCalculator(200000, .05, 30, 741));

multipleInterestRateMortgageCalculator();