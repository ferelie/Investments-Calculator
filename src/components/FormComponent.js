import { useState } from "react";

const initialState = ""
const FormComponent = ({onCalculate}) => {
  const [inputState, setInputState] = useState(initialState);

  function submitHandler(event) {
    event.preventDefault();
    console.log(event);
    onCalculate(inputState);
  }

  function resetHandler() {
    console.log("Reset");
    setInputState(initialState);

  }

  function changeHandler(event) {
    const { id, value } = event.target;
    setInputState((prevInput) => {
      return { ...prevInput, [id]: value };
    });
    console.log(inputState);
  }

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={changeHandler} type="number" id="current-savings" value={inputState['current-savings']}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={changeHandler}
            type="number"
            id="yearly-contribution"
            value={inputState['yearly-contribution']}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input onChange={changeHandler} type="number" id="expected-return" value={inputState['expected-return']} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={changeHandler} type="number" id="duration" value={inputState['duration']}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler}className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormComponent;
