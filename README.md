# Investments Calculator

## About

This simple React app is made so that one can easily calculate the compund interest if they chose to invest some of their yearly savings each year.

## How is works

Current Savings: Here you should add the amount of money you have already saved throughout the years or in other words the cash money u have in your bank account.

Yearly Savings: here you should add (on average) the amount of money you expect to save each year for the duration of the investment.

Expected Interest: Depending on the type of your invenstment you should have an idea how much percentage interest you are expecting per year. These investments can vary greatly (ie. gold, buying real estate, bonds, investment certificates etc...)

Investment Duration: Self explanatory. How long do you want this abount of money to keep being reinvested every year.

## Problems faced while coding this:

1. First problem i came across in the 'FormComponent.js' was in the 'changeHandler' function. I wasn't able to (continuously) listen to the user input and change the state accordingly. The solution was to destructure the HMTL element i am listening to and to detect that element using it's 'ID'. But in order to NOT lose all previous inputs, i used the spread operator with the built in (prevInput / prevState) to add the new changes to previous ones and not over-write them.

2. The second problem for me was lifting states from child components to parent components. The function 'calculateHandler' in 'App.js' was initially written in 'FormComponent.js' because it made more sense to calculate the results as soon as i get them from the user and to keep 'App.js' minimal. However it turns out that i need those calculations to pass them to 'ResultsTable.js' to preview the results so I moved the calculation logic up one level.

3. to be continued ...
