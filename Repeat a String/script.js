function repeatStringNumerousTimes(string, number) {
  return number > 0 ? string + repeatStringNumerousTimes(string, number - 1) : '';
}