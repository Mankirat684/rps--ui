let res = document.querySelector(".result")
let cs = document.querySelector(".comp")
let hs = document.querySelector(".user")
let humanScore = 0
let compScore = 0



function playRound(humanchoice, CompChoice) {
  console.log("Your Choice :" , humanchoice )
  console.log("Comp Choice :" , CompChoice )
    if (humanchoice == "rock" && CompChoice == "paper") {
      compScore++
     res.textContent = `You lose You chose ${humanchoice} , Computer chose ${CompChoice}`
    }else if( humanchoice == "paper" && CompChoice == "scissors" ){
      compScore++
      res.textContent = `You lose You chose ${humanchoice} , Computer chose ${CompChoice}`
    }else if(humanchoice == "scissors" && CompChoice == "rock"){
      compScore++
     res.textContent = `You lose You chose ${humanchoice} , Computer chose ${CompChoice}`
    }else if( humanchoice == CompChoice ){
      res.textContent = `You drew You chose ${humanchoice} , Computer chose ${CompChoice}`
    } else if(CompChoice == "rock" && humanchoice == "paper"  ) {
      humanScore++ 
      res.textContent = `You won You chose ${humanchoice} , Computer chose ${CompChoice}`
    }else if(CompChoice == "paper" && humanchoice == "scissors"){
      humanScore++ 
      res.textContent = `You won You chose ${humanchoice} , Computer chose ${CompChoice}`
    }else if( CompChoice == "scissors" && humanchoice == "rock"){
      humanScore++ 
      res.textContent = `You won You chose ${humanchoice} , Computer chose ${CompChoice}`
    }else{
      return "check spellings"
    }
    hs.textContent = `Your Score: ${humanScore}`
    cs.textContent = `Computer Score: ${compScore} `
  }

  



 let rockz = document.querySelector(".rock")
 rockz.addEventListener("click", () =>{
  function rdm() {
    return Math.floor(Math.random()*3);
   }
   function getCompChoice(){
    const choice = ["rock","paper","scissors"]
     return choice[rdm()]
     }
    let compChoice = getCompChoice()
    humanChoice = "rock"
    console.log(humanChoice)
    console.log(compChoice)
    playRound(humanChoice, compChoice)
 }
)
 
let paperz = document.querySelector(".paper")
paperz.addEventListener("click", () =>{
  function rdm() {
    return Math.floor(Math.random()*3);
   }
   function getCompChoice(){
    const choice = ["rock","paper","scissors"]
     return choice[rdm()]
     }
    let compChoice = getCompChoice()
    humanChoice = "paper"
    console.log(humanChoice)
    console.log(compChoice)
    playRound(humanChoice, compChoice)
 }
)

let scissorz = document.querySelector(".scissors")

scissorz.addEventListener("click", () =>{
  function rdm() {
    return Math.floor(Math.random()*3);
   }
   function getCompChoice(){
    const choice = ["rock","paper","scissors"]
     return choice[rdm()]
     }
    let compChoice = getCompChoice()
    humanChoice = "scissors"
    console.log(humanChoice)
    console.log(compChoice)
    playRound(humanChoice, compChoice)
 }
)

