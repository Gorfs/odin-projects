let choice = "0"
const choice_box = document.querySelector(".show-box")
const pcchoice_box = document.querySelector("#pc-show")
const player_scoreBox = document.querySelector(".score-human")
const pc_scoreBox = document.querySelector(".score-pc")
let pc_score = 0
let player_score = 0
const text_area = document.querySelector(".text-score")

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    round(button.textContent)
  })
})

function pcPlay() {
  let lst = ["🪨", "✂️", "🧻"]
  num = Math.random() * 2
  num = Math.round(num)
  console.log(num)
  let result = lst[num]
  console.log(result)
  return result
}

function updateScore(player) {
  if (player == "human") {
    player_score = player_score + 1
    player_scoreBox.textContent = player_score
    text_area.textContent = "You WON a point"
  } else {
    pc_score = pc_score + 1
    pc_scoreBox.textContent = pc_score
    text_area.textContent = "You LOST a point"
  }
}

function round(choice) {
  pcChoice = pcPlay()
  choice_box.textContent = choice
  pcchoice_box.textContent = pcChoice

  if (choice == pcChoice) {
    //situation if a tie occurs
    //need to do tie stuff
    text_area.textContent = " ITS A TIE"
    return "tie"
  } else if (choice == "🪨") {
    // if the player chose rock
    if (pcChoice == "🧻") {
      updateScore("robot")
      return "lose"
    } else {
      updateScore("human")
      return "win"
    }
  } else if (choice == "🧻") {
    // if the player chooses paper
    if (pcChoice == "🪨") {
      updateScore("human")
      return "win"
    } else {
      updateScore("robot")
      return "lose"
    }
  } else {
    //here the player has chosen scissors
    if (pcChoice == "🧻") {
      updateScore("human")
      return "win"
    } else {
      updateScore("robot")
      return "lose"
    }
  }
}
