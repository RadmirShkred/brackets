module.exports = function check(str, bracketsConfig) {
  let stack =[];
  const OPEN_BRACKETS =[];
  const CURLY_BRACKETS = {};
  const SQUARE_BRACKETS = [];

  for(let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    CURLY_BRACKETS[bracketsConfig[i][1]] = bracketsConfig[i][0];
    if(bracketsConfig[i][0] === bracketsConfig[i][1]) {
      SQUARE_BRACKETS.push(bracketsConfig[i][0]);
    }
  }

  for(let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];

      if(OPEN_BRACKETS.includes(currentSymbol)) {
          if(SQUARE_BRACKETS.includes(currentSymbol) && (stack[stack.length - 1] == currentSymbol)) {
            stack.pop();
            continue;
          }
          stack.push(currentSymbol);
      } else {
          if (stack.length === 0) {
              return false;
          }

          let topElement = stack[stack.length - 1];

          if (CURLY_BRACKETS[currentSymbol] === topElement) {
              stack.pop();
          } else {
              return false;
          }
      }
  }
  return stack.length === 0;
}
