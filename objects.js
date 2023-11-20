const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["read", "game", "piano" ],

    beverage: {
        morining: "coffee",
        afternoon: "Iced Tea"
    },

    action: function() {
        return "Hello World"
    },

    anotherAction: function() {
        return `Time for ${this.beverage.afternoon}`
    }
}

    console.log(anotherObj.alive)
    // output true

    console.log(anotherObj["alive"])
    // output true
    console.log(anotherObj.action())
    // output Hello World
    console.log(anotherObj.anotherAction())
    // output Time for Iced Tea


// inheritance
    const truck = Object.create(anotherObj)
    truck.doors = 2
    console.log(truck)
    // output {doors: 2}
    console.log(truck.alive)
    // output true
    console.log(truck.hobbies)
    // output ['read', 'game', 'piano']
    console.log(truck.action())
    // output Hello World


// keys and values
    console.log(Object.keys(anotherObj))
    // output ['alive', 'answer', 'hobbies', 'beverage', 'action', 'anotherAction']
    console.log(Object.values(anotherObj))
    // output [true, 42, Array(3), {…}, ƒ, ƒ]
    

// for
    for(let jobs in anotherObj) {
        console.log(jobs)
        //  output 
            // alive
            // answer
            // hobbies
            // beverage
            // action
            // anotherAction
    }

    for(let jobs in anotherObj) {
        
        console.log(`With ${jobs}, the value is ${anotherObj[jobs]}`)
        //output
            // With alive, the value is true
            // With answer, the value is 42
            // With hobbies, the value is read,game,piano
            // With beverage, the value is [object Object]
            // With action, the value is function() {
            // return "Hello World"
            // }
            // With anotherAction, the value is function() {
            // return `Time for ${this.beverage.afternoon}`
            // }
    }
    
// delete and hasOwnProperty
    const myProfile = {
        FirstName: "Richard",
        LastName : "Aboagye",
        age: 28,
    }
    console.log(myProfile)
    // output {FirstName: 'Richard', LastName: 'Aboagye', age: 28}
    console.log(myProfile.hasOwnProperty("LastName"))
    // output true

    delete myProfile.LastName
    console.log(myProfile)
    // output {FirstName: 'Richard', age: 28}
    console.log(myProfile.hasOwnProperty("LastName"))
    // output false

    

// Destructuring Objects 
    const myParticulars = {
        FirstName: "Richard",
        LastName : "Aboagye",
        age: 28,
    }

    const {age: myAge, FirstName: Name1, LastName: Name2} = myParticulars
    console.log(myAge, Name1, Name2)
    // output 28 'Richard' 'Aboagye'

    const {age, FirstName, LastName} = myParticulars
    // same as const {age: age, FirstName: FirstName, LastName: LastName} = myParticulars
    console.log(age, FirstName, LastName)
    // output 28 'Richard' 'Aboagye'

    function name({FirstName}) {
        return `${FirstName} is my first name`
    }
    console.log(name(myParticulars))
    // output Richard is my first name




    