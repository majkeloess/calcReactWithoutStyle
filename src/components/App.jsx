
import { useState } from "react";
import Operations from "./Operations";
import Result from "./Result";

function App (){
      const[enteredNum, setEnteredValue] = useState({
            first: 0,
            second: 0,
      });
      const[enteredOperator, setEnteredOperator] = useState('+');


      function firstNumberChangeHandler(e){
            setEnteredValue((prevVal) => ({
                  first: Number(e.target.value),
                  second: prevVal.second,
            }));      
      }

      function secondNumberChangeHandler(e){
            setEnteredValue((prevVal) => ({
                  first: prevVal.first,
                  second: Number(e.target.value),
            }));
      }
      
      function operatorChangeHandler(e){
            setEnteredOperator(e.target.value);
      }
      
      let outputResult = 0;

      if(enteredOperator === '+'){
            outputResult = enteredNum.first + enteredNum.second;
      }
      else if(enteredOperator === '-'){
            outputResult = enteredNum.first - enteredNum.second;
      }
      else if(enteredOperator === '*'){
            outputResult = enteredNum.first * enteredNum.second;
      }
      else if(enteredOperator === '/'){
            outputResult = enteredNum.first / enteredNum.second;
      }


      return(
            <>    
                  <p>
                        <Operations firstNumber={firstNumberChangeHandler} secondNumber={secondNumberChangeHandler} operator={operatorChangeHandler} />
                        <Result result={outputResult} />
                  </p>
            </>
      )
};
export default App;