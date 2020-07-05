const qn = [
  {question: 'A game arcade released in 1980', inputBox: 6, key: ''},
  {question: 'One of the most best-selling video game of all time', inputBox: 9, key: 'Letters collected: n'},
  {question: 'Play anywhere, anytime, with anyone', inputBox: 8, key: 'Letters collected: ne'},
  {question: 'Name of the silent black cat that deputed in 1919', inputBox: 5, key: 'Letters collected: ned'},
  {question: 'Name of a garden', inputBox: 4, key: 'Letters collected: nede'}]

const hintList = ['Hint: yellow boi', 'Hint: released in 2011', 'Hint: name of a game console', 'Hint: cartoon character', 'Hint: use your letters']

let index = 0

function loadpage(){
  //displays qn
  document.getElementById('qn').textContent = qn[index].question

  //displays letters unlocked
  if (index > 0){
    fetch('/testAnswer', )
  }
  document.getElementById('keyQn').textContent = qn[index].key

  boxDisplay()
}

function boxDisplay(){
  numberInputBox = qn[index].inputBox

  while (numberInputBox != 0){
    container = document.getElementById('word d-inline-block')
    inputBox = document.createElement('input')
    inputBox.className += 'letter'
    inputBox.setAttribute('maxlength', '1')
    inputBox.setAttribute('name', 'ans')
    container.appendChild(inputBox) 
    numberInputBox --
  }
}

function check(event){
  if (index !== 4){
    index ++
    document.getElementById('word d-inline-block').innerHTML = ''
    loadpage()
  }
}

document.getElementById("submit").addEventListener('click', function(event){
  var answer = append()
  fetch('/testAnswer', {method: 'POST', body: answer}) 
  event.preventDefault()
  check()
})

document.getElementById("hint").addEventListener('click', function(event){
  alert(hintList[index])
})

function append(){
  var nodeString = ''
  var numberInputBox = document.getElementsByName('ans').length
  for (i=0; i < numberInputBox; i++){
    var x = document.getElementsByName('ans')[i].value
    nodeString += x
  }
  //console.log(JSON.stringify(nodeString))
  return JSON.stringify(nodeString)
}
