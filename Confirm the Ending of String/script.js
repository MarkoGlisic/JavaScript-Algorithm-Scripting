function confirmEndingOfString(string, target) {
  
  let regularExp = new RegExp(target + "$", "i");

  return regularExp.test(string);
}

console.log(confirmEndingOfString("Bastian", "n"));