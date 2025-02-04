export function handleDegreeZero(equationData) {
  if (equationData[0].coefficient === 0) {
    console.log("The solution is:\n0");
  } else {
    console.log("The equation is invalid");
  }
}

export function handleDegreeOne(equationData) {
  // ax + b = 0 ==> x = -b / a
  const a = equationData[1].sign * equationData[1].coefficient;
  const b = equationData[0].sign * equationData[0].coefficient;

  console.log(`The solution is:\n${-b / a}`);
}

export function handleDegreeTwo(equationData) {
  // ax^2 + bx + c = 0 ==> discriminant = b^2 - 4ac
  const a = equationData[2].sign * equationData[2].coefficient;
  const b = equationData[1].sign * equationData[1].coefficient;
  const c = equationData[0].sign * equationData[0].coefficient;

  const discriminant = b * b - 4 * a * c;

  if (discriminant === 0) {
    console.log(
      `Discriminant is equal to zero, the solution is:\n${-b / (2 * a)}`
    );
  } else if (discriminant > 0) {
    console.log(
      `Discriminant is strictly positive, the two solutions are:\n${
        (-b + discriminant ** (1 / 2)) / (2 * a)
      }\n${(-b - discriminant ** (1 / 2)) / (2 * a)}`
    );
  } else {
    console.log(
      `Discriminant is strictly negative, the two solutions are:\n${
        -b / (2 * a)
      } + ${(-discriminant) ** (1 / 2) / (2 * a)}i\n${-b / (2 * a)} - ${
        (-discriminant) ** (1 / 2) / (2 * a)
      }i`
    );
  }
}
