function getNumberValue(elementId){
  const element= document.getElementById(elementId);
  const elementValue= element.innerText;
  // const elementValueInNumber= parseFloat(elementValueString);
  const calutationInputField = document.getElementById('display-result');
  calutationInputField.innerText += elementValue;
}
function getOparetorValue(elementId){
  const element= document.getElementById(elementId);
  const elementValueString= element.innerText;
  const calutationInputField = document.getElementById('display-result');
  calutationInputField.innerText += elementValueString;
}
function allClear(){
  document.getElementById('display-result').innerText=''; 
}

function calculationTotal(){
 const calculate= document.getElementById('display-result').innerText;
 let answer = eval(calculate);
 document.getElementById('display-result').innerText= answer;
  
}

function popValue(){
  const calculate= document.getElementById('display-result').innerText;
  document.getElementById('display-result').innerText = calculate.slice(0, -1);
}
