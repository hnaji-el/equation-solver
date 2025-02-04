// term: "s c * X^p" | "c * X^p"
export function parseTerm(term) {
  const res = {
    sign: 1, // 1 for plus(+), -1 for minus(-)
    coefficient: 0,
    power: 0,
  };

  if (term[0] === "+" || term[0] === "-") {
    res.sign = term[0] === "+" ? 1 : -1;
    res.coefficient = +term.slice(2, term.indexOf(" ", 2));
  } else {
    res.coefficient = +term.slice(0, term.indexOf(" ", 0));
  }

  res.power = +term.slice(term.lastIndexOf("^") + 1, term.length);

  return res;
}

export function getTermEndIndex(equation, indexStart) {
  const match = equation.slice(indexStart + 1).match(/[+-]/);

  return match ? match.index + indexStart : equation.length;
}
