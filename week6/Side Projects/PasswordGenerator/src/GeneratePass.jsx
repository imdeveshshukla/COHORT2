function getRandomNumberBtw(p=0,q=9) {return Math.floor((Math.random())*(q-p)+p);}
  function getRandomLowerCase() {return String.fromCharCode(getRandomNumberBtw(97,123));}
  function getRandomUpperCase() {return String.fromCharCode(getRandomNumberBtw(65,91));}
  function getRandomSymbol() {
    let symbols = ['!','@','$','#','&','>','?','<'];
    return symbols[getRandomNumberBtw(0,symbols.length)];}

export default function generatePassword(len,isSpecialCharAllow,isNumberAllow) {
    let randomFunctions = [];
    randomFunctions.push(getRandomUpperCase);
    randomFunctions.push(getRandomLowerCase);
    if(isSpecialCharAllow) randomFunctions.push(getRandomSymbol);
    if(isNumberAllow) randomFunctions.push(getRandomNumberBtw);
  
  
    let password = "";
    let length = len;
    for(let i=1;i<=length;i++)
    {
      try {
        let k = getRandomNumberBtw(0,randomFunctions.length);
        let callingFunction = randomFunctions[k];
        let ch = callingFunction();
        password = password+ch;
      } catch (error) {
        password = 'Select One Item';
      }
    }
    return password;
  }