const audioSequence = [{qn:"which country was Alan Turing born in?", audioClip:"source/qn1 (1).mp3"}, {qn:"When did Bill Gates make the first computer?", audioClip:"source/qn2 (1).mp3"}, {qn:"What is the first mobile App in the world?", audioClip:"source/qn3 (1).mp3"},{qn:"What is the most popular computer language now?", audioClip:"source/qn4 (1).mp3"}, {qn:"What were Steve Jobs last designs?", audioClip:"source/qn5 (1).mp3"}]
let index = 0

function loadPage(){
      //display audio
  audioDisplay()
      //display qn
  qn = document.getElementById('qn')
  qn.textContent = audioSequence[index].qn
  resizeInput()
  console.log(index)
}

function audioDisplay() {
  container = document.getElementById('audio')
  var x = document.createElement('AUDIO')
  x.canPlayType = 'audio/mpeg'
  x.setAttribute('src', audioSequence[index].audioClip)
  x.setAttribute('controls', 'controls')
  container.appendChild(x)
}


function toServer() {
  userInput = document.getElementById('input').value
  fetch('https://stem-week-cipher.herokuapp.com/testPicture', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ans:userInput}), //where data is a json object.
    credentials: 'include'
   }
  )
  .then(function(response){
    const contentType = response.headers.get("content-type")
    if(contentType == 'image/png') {
      return response.blob()
    }else{
      wrongAns = document.getElementById('wrong')
      wrongAns.textContent = "oops, try again :D"
      return null;
    } 
  })
  .then(function (data) {
    if (data !== null){
        const urlCreator = window.URL || window.webkitURL;
        document.getElementById('image').src = urlCreator.createObjectURL(data);
    }
  })
  .catch(function (error) {
    alert("error")//do smth when error happens
  });
}

function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);

function sent() {
  if (index !=4) {
    index ++
  } else {index = 0}
  document.getElementById('audio').innerHTML = ''
  loadPage()
}

document.getElementById('submit').addEventListener('click', function(event) {
    toServer()
    event.preventDefault()
    sent()
  }
)
