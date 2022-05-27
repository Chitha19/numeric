import DataTable from 'react-data-table-component';
import { evaluateTex } from 'tex-math-parser';
import {
    XYPlot,
    XAxis,
    YAxis,
    HorizontalGridLines,
    LineSeries,
  } from 'react-vis'

const columns = [
    {
        name: 'Iteration',
        selector: row => row.iteration,
    },
    {
        name: 'XL',
        selector: row => row.xl,
    },
    {
        name: 'XR',
        selector: row => row.xr,
    },
    {
        name: 'Error',
        selector: row => row.error,
    },
];






let databisection =[];
let arrayForG = [];

export function Callbisection(x,xl,xr){
    let count_id = 1;
    let iteration = 0;
    let error = null;
    
    let xMold = null;

    const funcBisection = (eq, xm) => {
        const equation = evaluateTex(eq, { x: xm })
        return equation.evaluated
    }

    let fxL = funcBisection(x , xl);
    let fxR = funcBisection(x , xr);
    let run = null;
    if((fxL>0 && fxR<0) || (fxL<0 && fxR>0)){
        run = true;
    }else{
        run = false;
    }
    while(run){
        console.log("iteration ="  + iteration);
        console.log("xl ="  + xl);
        console.log("xr ="  + xr);
        console.log("xMold ="  + xMold);
        let xM = (xl+xr)/2;
        console.log("xM ="  + xM);

        let fxM = funcBisection(x , xM);
        console.log("fxM =" + fxM);

        fxR = funcBisection(x , xr);
        console.log("fxR =" + fxR);

        if(fxM * fxR > 0){
            xr = xM;
            
            console.log("xMold ="+ xMold);
            
            if(iteration >= 1){
                error = Math.abs((xM - xMold) / xM);
                console.log("error ="+error);
                if(error < 0.000001){
                    break;
                }
            }
            xMold = xM;

            if(iteration >= 1){
            let arraypushG = {x : iteration , y : error}
            arraypushG.x = iteration;
            arraypushG.y = error;
            arrayForG.push(arraypushG)
            }

            let datapush = {count_id: count_id, iteration : iteration, xl: xl, xr: xr, error: error};
            datapush.count_id = count_id;
            datapush.iteration = iteration;
            datapush.xl = xl;
            datapush.xr = xr;
            datapush.error = error;
            databisection.push(datapush);

            count_id++;
            iteration++;
            console.log("iteration ="+iteration);
        }else if(fxM * fxR < 0){
            console.log("fxM * fxr ="+fxM * fxR);
            xl = xM;
            
            console.log("xMold ="+ xMold);

            if(iteration >= 1){
                error = Math.abs((xM - xMold) / xM);
                console.log("error ="+error);
                if(error < 0.000001){
                    break;
                }
            }
            xMold = xM;

            if(iteration >= 1){
            let arraypushG = {x : iteration , y : error}
            arraypushG.x = iteration;
            arraypushG.y = error;
            arrayForG.push(arraypushG)
            }

            let datapush = {count_id: count_id, iteration : iteration, xl: xl, xr: xr, error: error};
            datapush.count_id = count_id;
            datapush.iteration = iteration;
            datapush.xl = xl;
            datapush.xr = xr;
            datapush.error = error;
            databisection.push(datapush);

            count_id++;

            iteration++;
            console.log("iteration ="+iteration);
        }
    }

return [ 
        <DataTable
            columns={columns}
            data={databisection}
        />,
        <XYPlot width={400} height={400}>
        <HorizontalGridLines />
        <LineSeries data={arrayForG} />
        <XAxis />
        <YAxis />
        </XYPlot>,
    
    ]; 
};




    



