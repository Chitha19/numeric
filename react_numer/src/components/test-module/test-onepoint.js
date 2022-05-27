

function OnePoint(){
    let iteration = 1;
    let error = null;
    let xStart = 2.00;
    
    let run = true;

    while(run){
        console.log("iteration =" + iteration);
        console.log("xStart =" + xStart);
        
        
        let x1 = Math.pow(xStart,2)-1
        console.log("x1 ="+x1);
        error = Math.abs((x1-xStart)/x1)
        console.log("error ="+error);
        if (iteration >= 1){
        if (iteration > 3) {
            break;
          }
        }
        xStart = x1;
        iteration++

    }
}

OnePoint();

