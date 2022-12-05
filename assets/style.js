let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
console.log(countEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log(count)

}

function save(){
    let countStr = count + "  -  "
    saveEl.textContent += countStr
    console.log(count)
    countEl.textContent = 0 
    count = 0 
}




// let myGreeting = greeting + username 

// console.log(myGreeting)

// let welcomeEL = document.getElementById("welcome-el")
// console.log(welcomeEL)

// let names = "Aliyah Gutierrez"

// let greeting = " Welcome Back!"

// welcomeEL.innerText = names + greeting


// welcomeEL.innerText += "👋"

// let username = "per"

// let messages = "You have three new notifications" 

// console.log(messages)

// console.log (username + "," + messages + "!")

// let username = "Aliyah"

// let = messages = "you have three new notifications"

// let = messageToUser = username + ", " + messages + "!"

// console.log( messageToUser)

// let username = "Aliyah"

// let greeting = "Hi, my name is " 


// let myGreeting = greeting + username 

// console.log(myGreeting)

// let welcomeEL = document.getElementById("welcome-el")
// console.log(welcomeEL)

// let names = "Aliyah Gutierrez"

// let greeting = " Welcome Back!"

// welcomeEL.innerText = names + greeting


// welcomeEL.innerText += "👋"





//  DOM DOCUMENT OBJECT MODEL 

// DOCUMTNE BEACAUSE HTML as

//  DATA IS THE OBJECT 

//  THE REAL THING IS


