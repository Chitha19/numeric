import DataTable from "react-data-table-component";
import { evaluateTex } from "tex-math-parser";
import { derivative } from 'mathjs'
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
} from "react-vis";

const columns = [
  {
    name: "Iteration",
    selector: (row) => row.iteration,
  },
  {
    name: "X(i)",
    selector: (row) => row.x0,
  },
  {
    name: "X(i+1)",
    selector: (row) => row.x1,
  },
  {
    name: "Error",
    selector: (row) => row.error,
  },
];

let dataFalse = [];
let arrayForG = [];

export function CallNewton(x, x0) {
  let count_id = 1;
  let iteration = 1;
  let error = null;
  

  const funcNewton = (eq, xm) => {
    const equation = evaluateTex(eq, { x: xm });
    return equation.evaluated;
  };

  
  
  
  let run = true;
  
  while (run) {
    
    let fx = funcNewton(x, x0);
    let f2x = derivative(x, 'x').evaluate({ x: x0 })
    
    let x1 = x0 - (fx/f2x)
    error = Math.abs((x1-x0)/x1)
    
    if (iteration >= 1) {
        let arraypushG = { x: iteration, y: error };
        arraypushG.x = iteration;
        arraypushG.y = error;
        arrayForG.push(arraypushG);
      }
      let datapush = {
        count_id: count_id,
        iteration: iteration,
        x0: x0,
        x1: x1,
        error: error,
      };
      datapush.count_id = count_id;
      datapush.iteration = iteration;
      datapush.x0 = x0;
      datapush.x1 = x1;
      datapush.error = error.toFixed(10);
      dataFalse.push(datapush);
    x0 = x1
    count_id++
    iteration++
    if (error < 0.000001) {
        break;
      
    } 
  }

  return [
    <DataTable columns={columns} data={dataFalse} />,
    <XYPlot width={400} height={400}>
      <HorizontalGridLines />
      <LineSeries data={arrayForG} />
      <XAxis />
      <YAxis />
    </XYPlot>,
  ];
}
