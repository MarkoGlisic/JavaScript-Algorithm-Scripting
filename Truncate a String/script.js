function truncateString(string, number) {
  if (string.length > number) {
    return string.slice(0, number) + "...";
  } else {
    return string;
  }
}


/* 

Option 2: Using Ternary Operator

function truncateString(string, number) {
  return string.length > number ? string.slice(0, number) + "..." : string;
}

*/