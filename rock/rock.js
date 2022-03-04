function computerPlay() {
  let lst = ["rock", "paper", "scissors"]
  let random = Math.floor(Math.random() * 3)
  return lst[random]
}

function single(pcPlay, playPlay) {
  if (pcPlay == playPlay) {
    console.log("TIE")
    return "tie"
  }
  if (pcPlay == "paper") {
    if (playPlay == "rock") {
      console.log("You lose gg")
      return "player lose"
    } else {
      console.log("You win")
      return "player win"
    }
  }
  if (pcPlay == "rock") {
    if (playPlay == "paper") {
      console.log("You win")
      return "player win"
    } else {
      console.log("you lose")
      return "player lose"
    }
  }
  if (pcPlay == "scissors") {
    if (playPlay == "paper") {
      console.log("you lose")
      return "player lose"
    } else {
      console.log("you win")
      return "player win"
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerScore = 0
    let pcScore = 0
    let user_select = prompt("what are you playing?")
    user_select.toLocaleLowerCase()
    console.log("you have chosen ", user_select)
    if (single(computerPlay(), user_select) == "player win") {
      playerScore = playerScore + 1
      console.log("euh you have played a game")
      // do stuff to update the divs
    }
    if (single(computerPlay(), user_select) == "player lose") {
      pcScore = pcScore + 1
      //do more stuff to update the divs
    }
  }
}
game()
