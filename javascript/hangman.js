class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord()
    this.letters = []
    this.guessedLetters = ""
    this.errorsLeft = 10
  }

  pickWord() {

    const index = Math.floor(Math.random() * this.words.length);
    const randomWord = this.words[index]

    return randomWord

  }

  checkIfLetter(keyCode) {

    if (keyCode >= 65 && keyCode <= 90) {
      return true
    } else {
      return false
    }

  }

  checkClickedLetters(letter) {
    
    if (this.letters.includes(letter)) {
      return false
    } else {
      return true
    }

  }

  addCorrectLetter(letter) {
    
    this.guessedLetters += letter

  }

  addWrongLetter(letter) {
    
    this.letters.push(letter)
    this.errorsLeft -= 1


  }

  checkGameOver() {
    
    if (this.errorsLeft > 0) {
      return false
    } else {
      return true
    }

  }

  checkWinner() {

    let sortGuess = this.guessedLetters.toLowerCase().split("").sort().join("")
    let sortSecret = this.secretWord.toLowerCase().split("").sort().join("")
    
    if (sortGuess === sortSecret) {
      return true
    } else {
      return false
    }
    
  }
}


let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
