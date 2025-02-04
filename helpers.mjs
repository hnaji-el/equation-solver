export function printReducedForm(equationData) {
  let reducedForm = "";

  for (const term of equationData) {
    reducedForm += `${term.sign === 1 ? "+" : "-"} ${term.coefficient} * X^${
      term.power
    } `;
  }

  if (equationData[0].sign === 1) reducedForm = reducedForm.slice(2);
  reducedForm += "= 0";

  console.log(`Reduced form: ${reducedForm}`);
}

export function getEquationDegree(equationData) {
  let equationDegree = equationData.length - 1;

  for (; equationDegree > 0; equationDegree--) {
    if (equationData[equationDegree].coefficient !== 0) {
      return equationDegree;
    }
  }

  return equationDegree;
}
