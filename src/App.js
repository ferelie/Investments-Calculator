import FormComponent from "./components/FormComponent";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import React, { useState } from 'react';



function App() {
  const [results, setResults] = useState(null);
  const yearlyData = [];
  let savings = 0;

  const calculateHandler = (userInput) => {
    
    let currentSavings = +userInput["current-savings"]; 
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

  
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    
    savings = userInput['current-savings'];
    setResults(yearlyData);

  };

  return (
    <div>
      <Header />

      <FormComponent onCalculate={calculateHandler} />
      { !results && <h2>No data to Show</h2> }
      { results && <ResultsTable data={results} initialInvestment={savings} /> }
    </div>
  );
}

export default App;
