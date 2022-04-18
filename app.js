console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor(name, numPets, residence, hobbies){
        this.name = name;
        this.numPets = numPets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    info(){
        console.log(`${this.name} has ${this.numPets} pet(s), lives in ${this.residence} and enjoys ${this.hobbies}`)
    }
  
    greet(name = "human bean"){
        console.log(`Hello ${name}! It's nice to see you again!`)
    }
}

class Coder extends Person{ 
    constructor(name, numPets, residence, hobbies){
       super(name, numPets, residence, hobbies);

       this.occupation = "Full Stack Web Developer";
    }
    greet(name = "Jerry"){
        console.log(`Hello ${name}`);
    }
}

const amber = new Person("Amber", 2, "Circleville", ["crocheting", "cooking", "watching movies" ]);
const biscuit = new Coder("Biscuit", 1, "Circleville", ["coding", "video games", "browsing reddit"]);

amber.info();
biscuit.info();

amber.greet(biscuit.name);
biscuit.greet(amber.name);