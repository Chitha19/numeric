import DataTable from "react-data-table-component";
import { evaluateTex } from "tex-math-parser";
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
    name: "XL",
    selector: (row) => row.xl,
  },
  {
    name: "XR",
    selector: (row) => row.xr,
  },
  {
    name: "Error",
    selector: (row) => row.error,
  },
];

let dataFalse = [];
let arrayForG = [];

export function CallFalseposition(x, xl, xr) {
  let count_id = 1;
  let iteration = 1;
  let error = null;
  let xold = null;

  const funcFalseposition = (eq, xm) => {
    const equation = evaluateTex(eq, { x: xm });
    return equation.evaluated;
  };

  
  let run = true;
  
  while (run) {
    let fxL = funcFalseposition(x, xl);
    let fxR = funcFalseposition(x, xr);
    console.log("iteration =" + iteration);
    console.log("xl =" + xl);
    console.log("xr =" + xr);
    console.log("xold =" + xold);
    let x1 = (xl * fxR - xr * fxL) / (fxR - fxL);
    console.log("x1 =" + x1);

    let fx1 = funcFalseposition(x, x1);
    console.log("fxM =" + fx1);

    fxR = funcFalseposition(x, xr);
    console.log("fxR =" + fxR);

    if (fx1 * fxR > 0) {
      xr = x1;

      console.log("xold =" + xold);

      if (iteration >= 2) {
        error = Math.abs((x1 - xold) / x1);
        console.log("error =" + error);
        if (error < 0.000001) {
          break;
        }
      }
      xold = x1;

      if (iteration >= 2) {
        let arraypushG = { x: iteration, y: error };
        arraypushG.x = iteration;
        arraypushG.y = error;
        arrayForG.push(arraypushG);
      }

      let datapush = {
        count_id: count_id,
        iteration: iteration,
        xl: xl,
        xr: xr,
        error: error,
      };
      datapush.count_id = count_id;
      datapush.iteration = iteration;
      datapush.xl = xl;
      datapush.xr = xr;
      datapush.error = error;
      dataFalse.push(datapush);

      count_id++;
      iteration++;
      console.log("iteration =" + iteration);
    } 
    else if (fx1 * fxR < 0) {
      xl = x1;

      console.log("xold =" + xold);

      if (iteration >= 2) {
        error = Math.abs((x1 - xold) / x1);
        console.log("error =" + error);
        if (error < 0.000001) {
          break;
        }
      }
      xold = x1;

      if (iteration >= 2) {
        let arraypushG = { x: iteration, y: error };
        arraypushG.x = iteration;
        arraypushG.y = error;
        arrayForG.push(arraypushG);
      }

      let datapush = {
        count_id: count_id,
        iteration: iteration,
        xl: xl,
        xr: xr,
        error: error,
      };
      datapush.count_id = count_id;
      datapush.iteration = iteration;
      datapush.xl = xl;
      datapush.xr = xr;
      datapush.error = error;
      dataFalse.push(datapush);

      count_id++;
      iteration++;
      console.log("iteration =" + iteration);
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
