import React,{useState,useRef,useEffect} from 'react'
import "./bisection.css";
import { CallSecant } from './Secant-table';


const Secant = () => {
  const [isLoaded, setIsLoaded] = useState([]);

  const [result, setresult] = useState("");
  const [eq, seteq] = useState("");
  const equationInputRef = useRef();
  const xlInputRef = useRef();
  const xrInputRef = useRef();

  const sendRequest = async () => {
    const response = await fetch("http://localhost:5000/api/get-bisection");
    const responseData = await response.json();
    setIsLoaded(responseData);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  const saveItem = (event) => {
    event.preventDefault();
    const enteredEquation = equationInputRef.current.value;
    const enteredXl = xlInputRef.current.value;
    const enteredXr = xrInputRef.current.value;
    let xlfloat = parseFloat(enteredXl);
    let xrfloat = parseFloat(enteredXr);
    setresult(CallSecant(enteredEquation, xlfloat, xrfloat));
  };


  return (
    <div className="h1pj">
      <h1>คำนวณ Secant</h1>
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

          <select ref={xlInputRef}>
            {isLoaded.map((equXl, index) => {
              return (
                <option key={index} value={equXl.xl} label={equXl.xl}></option>
              );
            })}
          </select>

        <div>
            <label>input X1</label>
          </div>

          <select ref={xrInputRef}>
            {isLoaded.map((equXr, index) => {
              return (
                <option key={index} value={equXr.xr} label={equXr.xr}></option>
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

export default Secant