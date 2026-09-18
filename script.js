function isValideVariable(variable) {
  let specialChar = " -+.,*@!#%^&";
  let valid = true;
  if (!isNaN(parseInt(variable[0])) || variable == "") {
    valid = false;
    return "invalid variable name";
  } else {
    for (let i = 0; i < specialChar.length; i++) {
      if (variable.indexOf(specialChar[i]) !== -1) {
        valid = false;
        break;
      }
    }
  }
  if (valid) return "valid variable name";
  else return "invalid variable name";
}

console.log(isValideVariable("1n a"));
