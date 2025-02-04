import { parseTerm, getTermEndIndex } from "./parsing.mjs";
import {
  handleDegreeZero,
  handleDegreeOne,
  handleDegreeTwo,
} from "./evaluation.mjs";
import { printReducedForm, getEquationDegree } from "./helpers.mjs";

function main() {
  if (process.argv.length !== 3) {
    console.log(
      `The number of arguments must be 1, not ${process.argv.length - 2}`
    );
    return 1;
  }

  const equation = process.argv[2].split("=");
  const lhsEquation = equation[0].trim();
  const rhsEquation = equation[1].trim();
  const equationData = []; // { sign: 1 or -1, coefficient: x, power: y }[]

  // lhsEquation
  for (
    let indexStart = 0, indexEnd = 0;
    indexEnd < lhsEquation.length;
    indexStart = indexEnd + 1
  ) {
    indexEnd = getTermEndIndex(lhsEquation, indexStart);

    equationData.push(parseTerm(lhsEquation.slice(indexStart, indexEnd)));
  }

  // rhsEquation
  for (
    let indexStart = 0, indexEnd = 0;
    indexEnd < rhsEquation.length;
    indexStart = indexEnd + 1
  ) {
    indexEnd = getTermEndIndex(rhsEquation, indexStart);

    const termData = parseTerm(rhsEquation.slice(indexStart, indexEnd));

    if (termData.power >= equationData.length) {
      termData.sign *= -1;
      equationData.push(termData);
      continue;
    }

    const newCoefficient =
      equationData[termData.power].sign *
        equationData[termData.power].coefficient -
      termData.sign * termData.coefficient;

    equationData[termData.power].sign = newCoefficient >= 0 ? 1 : -1;
    equationData[termData.power].coefficient =
      newCoefficient >= 0 ? newCoefficient : -newCoefficient;
  }

  printReducedForm(equationData);

  const equationDegree = getEquationDegree(equationData);
  console.log(`Polynomial degree: ${equationDegree}`);

  // evaluation
  if (equationDegree === 0) {
    handleDegreeZero(equationData);
  } else if (equationDegree === 1) {
    handleDegreeOne(equationData);
  } else if (equationDegree === 2) {
    handleDegreeTwo(equationData);
  } else {
    console.log(
      "The polynomial degree is strictly greater than 2, I can't solve."
    );
  }
}

main();
