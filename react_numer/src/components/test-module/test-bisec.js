function callbisection(){
    
    let iteration = 0;
    let error = null;
    let xl = 1.5;
    let xr = 2.0;
    let xMold = null;

    let fxL = Math.pow(xl,4)-13;
    let fxR = Math.pow(xr,4)-13;
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

        fxM = Math.pow(xM,4)-13;
        console.log("fxM =" + fxM);

        fxR = Math.pow(xr,4)-13;
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
            iteration++;
            console.log("iteration ="+iteration);
        }
    }


};

callbisection();