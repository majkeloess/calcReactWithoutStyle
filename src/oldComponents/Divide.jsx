import { useState } from "react";

function Divide(){
      const[enteredNum, setEnteredValue] = useState({
            first: 0,
            second: 0,
      });

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
      
      const result = enteredNum.first / enteredNum.second;
      
      return(
            <>
                  <li>
                        <input type="number" onChange={firstNumberChangeHandler}/> / <input type="number" onChange={secondNumberChangeHandler} /> = {result}
                  </li>
            </>
      )
};

export default Divide;