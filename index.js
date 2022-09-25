// number javascript

document.getElementById('number-one').addEventListener('click', function(){
  const numberOne= getNumberValue('number-one');
})
document.getElementById('number-two').addEventListener('click', function(){
  const numberOne= getNumberValue('number-two');
})
document.getElementById('number-three').addEventListener('click', function(){
  const numberOne= getNumberValue('number-three');
})
document.getElementById('number-four').addEventListener('click', function(){
  const numberOne= getNumberValue('number-four');
})
document.getElementById('number-five').addEventListener('click', function(){
  const numberOne= getNumberValue('number-five');
})
document.getElementById('number-six').addEventListener('click', function(){
  const numberOne= getNumberValue('number-six');
})
document.getElementById('number-seven').addEventListener('click', function(){
  const numberOne= getNumberValue('number-seven');
})
document.getElementById('number-eight').addEventListener('click', function(){
  const numberOne= getNumberValue('number-eight');
})
document.getElementById('number-nine').addEventListener('click', function(){
  const numberOne= getNumberValue('number-nine');
})
document.getElementById('number-zero').addEventListener('click', function(){
  const numberOne= getNumberValue('number-zero');
})

// operator javascript

document.getElementById('plus-oparetor').addEventListener('click', function(){
  const numberOne= getOparetorValue('plus-oparetor');
})
document.getElementById('minus-oparetor').addEventListener('click', function(){
  const numberOne= getOparetorValue('minus-oparetor');
})
document.getElementById('multi-oparetor').addEventListener('click', function(){
  const numberOne=  getOparetorValue('multi-oparetor');
})
document.getElementById('division-oparetor').addEventListener('click', function(){
  const numberOne=  getOparetorValue('division-oparetor');
})

// all clear button
document.getElementById('all-clear').addEventListener('click', function(){
  allClear();
})

// answer button
document.getElementById('result-equal').addEventListener('click',function(){
  calculationTotal()
});

// single delete button
document.getElementById('single-delete').addEventListener('click', function(){
  popValue();
})