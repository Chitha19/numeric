import React,{useState,useRef,useEffect} from 'react'
import "./bisection.css";
import { CallNewton } from './newton-table';



const OnePoint = () => {
  const [isLoaded, setIsLoaded] = useState([]);
  
  
  const [result, setresult] = useState("");
  const [eq, seteq] = useState("");

  const equationInputRef = useRef();
  const xmInputRef = useRef();

  const sendRequest = async () => {
    const response = await fetch("http://localhost:5000/api/get-onePoint");
    const responseData = await response.json();
    setIsLoaded(responseData);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  const saveItem = (event) => {
    event.preventDefault();
    const enteredEquation = equationInputRef.current.value;
    const enteredXM = xmInputRef.current.value;
    
    let xmfloat = parseFloat(enteredXM);
    
    setresult(CallNewton(enteredEquation,xmfloat));
  };


  return (
    <div className="h1pj">
      <h1>คำนวณ Newton Raphson</h1>
      <div className="inputarea">
        <form onSubmit={saveItem}>
          <div>
            <label>input EQ</label>
          </div>

          <select ref={equationInputRef}>
            {isLoaded.map((equ, index) => {
              return (
                <option
                  key={index}
                  value={equ.equation}
                  label={equ.equation}
                ></option>
              );
            })}
          </select>

          <div>
            <label>input X0</label>
          </div>

          <select ref={xmInputRef}>
            {isLoaded.map((equXM, index) => {
              return (
                <option key={index} value={equXM.xm} label={equXM.xm}></option>
              );
            })}
          </select>
          

          
          <div>
            <input type="submit" className="btn-submit" value="Submit" />
          </div>
        </form>
      </div>
      <div>{result[0]}</div>
      <div>{result[1]}</div>
    </div>
  )
}

export default OnePoint