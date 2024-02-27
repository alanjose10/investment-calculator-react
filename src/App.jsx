import { useState } from "react"

import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {

  const [userInput, setUserInput] = useState(
    {
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 12
    }
  );

  const inputIsValud = userInput.duration >= 1;

  const handleInputChange = (inputIdentifier, newValue) => {
    setUserInput((prevState) => {
        return {
            ...prevState,
            [inputIdentifier]: +newValue
        }
    });
    console.log(userInput);
  }

  return (
  <>
    <Header></Header>
    <UserInput userInput={userInput} onChange={handleInputChange}></UserInput>
    {inputIsValud && <Result userInput={userInput}></Result>}
    {!inputIsValud && <p class="center">Please provide a valid duration</p>}
  </>
  )
}

export default App
