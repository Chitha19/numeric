function FalsePosition() {
  let iteration = 1;
  let error = null;
  let xl = 1.5;
  let xr = 2.0;
  let xold = null;

  let run = true;

  while (run) {
    console.log("iteration =" + iteration);
    console.log("xl =" + xl);
    console.log("xr =" + xr);
    console.log("xold ="  + xold);

    fxL = Math.pow(xl, 4) - 13;
    console.log("fxL =" + fxL);

    fxR = Math.pow(xr, 4) - 13;
    console.log("fxR =" + fxR);

    let x1 = (xl * fxR - xr * fxL) / (fxR - fxL);
    console.log("x1 =" + x1);

    fx1 = Math.pow(x1, 4) - 13;
    console.log("fx1 =" + fx1);

    if (fx1 * fxR < 0) {
      xl = x1;

      if (iteration >= 2) {
        error = Math.abs((x1 - xold) / x1);
        console.log("error =" + error);
        if (error < 0.000001) {
          break;
        }
      }

      xold = x1;
      iteration++;
    } else if (fx1 * fxR > 0) {
      xr = x1;

      if (iteration >= 2) {
        error = Math.abs((x1 - xold) / x1);
        console.log("error =" + error);
        if (error < 0.000001) {
          break;
        }
      }

      xold = x1;
      iteration++;
    }
  }
}

FalsePosition();
