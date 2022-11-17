const isEmpty = (obj) => {
  for (let key in obj) {
    if (key) return false;
  }

  return true;
};

const sumSalaries = (obj) => {
  let sum = 0;

  for (const key in obj) {
    sum += obj[key];
  }

  return sum;
};

const multiplyNumeric = (obj) => {
  const multipliedNumeric = { ...obj };

  for (const key in multipliedNumeric) {
    if (typeof multipliedNumeric[key] === "number") {
      multipliedNumeric[key] *= 2;
    }
  }

  return multipliedNumeric;
};
