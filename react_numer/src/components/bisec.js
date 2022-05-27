function checkbisec(xL,xR){
    fxL = Math.pow(xL,4)-13;
    fxR = Math.pow(xR,4)-13;
    if((fxL>0 && fxR<0) || (fxL<0 && fxR>0)){
        return true;
    }else{
        return false;
    }
}
function Bisection(xL,xR,oldxM,Oldabcilon){
    xM = (xL+xR)/2;
    fxM = Math.pow(xM,4)-13;
    fxR = Math.pow(xR,4)-13;
    abcilon  = Math.abs((xM-oldxM)/xM);
    if(abcilon < 0.000001 && abcilon == Oldabcilon){
        console.log("result: ", xM);
        return;
    }else{
        if(fxR * fxM > 0){
            Bisection(xL,xM,xM,abcilon);
        }else{
            Bisection(xM,xR,xM,abcilon);
        }
    }
}
if(checkbisec(1.5,2)){
    xM = (1.5+2)/2;
    fxM = Math.pow(1.5,4)-13;
    fxR = Math.pow(2,4)-13;
    if(fxM * fxR > 0){
        Bisection(1.5,xM,xM,-1);
    }else{
        Bisection(xM,2,xM,-1);
    }
}