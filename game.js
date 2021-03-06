emojione = require('emojione');

// const character = emojione.toImage(':grinning:');
// document.getElementById('game').innerHTML = character;

class PlayerCharacter {
  constructor() {
    this.y = 3;
    this.x = 3;
  }
}

character = new PlayerCharacter;

window.onkeyup = function(e) {
  switch(e.keyCode) {
    case 37:
      character.x = character.x - 1;
      draw();
      break;
    case 38:
      character.y = character.y - 1;
      draw();
      break;
    case 39:
      character.x = character.x + 1;
      draw();
      break;
    case 40:
      character.y = character.y + 1;
      draw();
      break;
  }
}

const draw = function(char) {
  let content = ""
  const width = 7;
  const height = 7;

  for (i = 0; i <= width; i++) {
    for (j = 0; j <= height; j++) {
      if (i == character.y && j == character.x) {
        content = content + '@';
      } else if (i == width || j == height || i == 0 || j == 0) {
        content = content + '#';
      } else {
        content = content + '.';
      }

      if (j == height) {
        content = content + '<br>';
      }
    }
  }
  document.getElementById('game').innerHTML = content;
};

draw();
