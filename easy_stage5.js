const qn = [
  {question: 'A game arcade released in 1980', inputBox: 6, key: ''},
  {question: 'One of the most best-selling video game of all time', inputBox: 9, key: 'Letters collected: n'},
  {question: 'Play anywhere, anytime, with anyone', inputBox: 8, key: 'Letters collected: ne'},
  {question: 'Name of the silent black cat that deputed in 1919', inputBox: 5, key: 'Letters collected: ned'},
  {question: 'Name of a garden', inputBox: 4, key: 'Letters collected: nede'}]

let index = 0

function loadpage(){
  //displays qn
  document.getElementById('qn').textContent = qn[index].question

  document.getElementById('keyQn').textContent = qn[index].key

  boxDisplay()
  console.log(index)

  /*document.getElementById("submit").addEventListener('click', function(event){
  event.preventDefault();
  check();
  })*/
}

function boxDisplay(){
  numberInputBox = qn[index].inputBox

  while (numberInputBox != 0){
    container = document.getElementById('word d-inline-block')
    inputBox = document.createElement('input')
    inputBox.className += 'letter'
    inputBox.setAttribute('maxlength', '1')
    container.appendChild(inputBox)
    numberInputBox --
  }
}


function check(event){
  //appending answers here
  if (index !== 4){
    index ++
    document.getElementById('word d-inline-block').innerHTML = ''
    loadpage()
  }
}
document.getElementById("submit").addEventListener('click', function(event){
  event.preventDefault();
  check();
})

/*<button id="myButton" class="float-left submit-button" >Home</button>
<script type="text/javascript">
    document.getElementById("myButton").onclick = function () {
        location.href = "www.google.com";
    };
</script>
