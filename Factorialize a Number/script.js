function factorializeNumber(number) {
  if (number === 0) {
    return 1;
  }
  return number * factorializeNumber(num - 1);
}

factorializeNumber(5);