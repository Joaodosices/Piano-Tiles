numbersPressed()
var previousTile = null;
setInterval(function(){ 
  let currentTile = checkPreviousTile(createTilesToPress)
  visualizeTile(currentTile)
}, 1000);


function numbersPressed() {
  const btn1 = document.getElementById('btn1')
  const btn2 = document.getElementById('btn2')
  const btn3 = document.getElementById('btn3')
  const btn4 = document.getElementById('btn4')

  window.addEventListener('keydown', function (e) {
    switch(e.key){
      case '1':
        btn1.style.background = 'green'
      break;
      case '2':
        btn2.style.background = 'green'
      break;
      case '3':
        btn3.style.background = 'green'
      break;
      case '4':
        btn4.style.background = 'green'
      break;
      default:
    }
  }, false);
  
  window.addEventListener('keyup', function (e) {
    switch(e.key){
      case '1':
        btn1.style.background = 'black'
      break;
      case '2':
        btn2.style.background = 'black'
      break;
      case '3':
        btn3.style.background = 'black'
      break;
      case '4':
        btn4.style.background = 'black'
      break;
      default:
    }
  }, false);
}

function createTilesToPress() {
  let tileToPress = parseInt(Math.floor(Math.random() * 4))

  return tileToPress
}

function checkPreviousTile(createTilesToPress) {
  let tileToPress = createTilesToPress()
  if(previousTile != tileToPress) {
    previousTile = tileToPress
    
    return tileToPress
  }
  if (tileToPress == 3){
    tileToPress = tileToPress - 1
  } 
  tileToPress = tileToPress + 1
  previousTile = tileToPress
  
  return tileToPress
}
function visualizeTile(currentTile) {
  document.getElementsByClassName('areaTiles')[currentTile].innerHTML = 
    '<div class="tileToDestroy">.</div>'

  for (let i = 0; i < document.getElementsByClassName('tileToDestroy').length; i++) {
  }
}