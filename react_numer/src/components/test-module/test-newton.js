function newton(){
    let x = 0.5
    let fx = Math.pow(x,2)-Math.sin(x)
    let fxprime = (2*x) - Math.cos(x)
    let iteration = 1
    let xold = null;
    let run = true;

    

    while(run){
    
    console.log(iteration);
    console.log(x);
    console.log(fx);
    console.log(fxprime);
    
    let xNew = x - (fx/fxprime)
    console.log("xNew "+xNew);

    let error = Math.abs((xNew-x)/xNew)
    console.log("error "+error);

    x = xNew
    iteration++
    }
}
newton()