function Operations(props){
      
      return(
            <>
                  <p>
                        <input type="number" onChange={props.firstNumber}/> 
                        <select name="operators" onChange={props.operator}>
                              <option value="+">+</option>
                              <option value="-">-</option>
                              <option value="*">*</option>
                              <option value="/">/</option>
                        </select> 
                        <input type="number" onChange={props.secondNumber} />
                  </p>
            </>
      )
};

export default Operations;