

var myCat = {
 hunger: 40, 
 sleepyness: 30,
 happyness: 50,
 lonieness: 10,
 obedience: -100,
 
 feed: function() {
    console.log("Om nom nom.");
    this.hunger -= 5;
    
    if (this.hunger > 75) {
        console.log("Hiss!");
    }  
    
    else if ( 25 < this.hunger < 75) {
        console.log("Rawr.");
    }
    
    else if (this.hunger < 25) {
        console.log("Meow.");
    }

},
 
 status: function() {
    var states = {
        hunger: this.hunger,
        sleepyness: this.sleepyness,
        happyness: this.happyness,
        lonieness: this.lonieness,
        obedience: this.obedience
    }; 
    
    console.log("Your cat's status is:");
    
    for (key in states) {
     console.log(key, states[key]);
    }
    
    
    
 },
 
 play: function(action) {  
    if (action === "pet") {
        this.pet();    
    }
    else if (action === "lazerpointer") {
        this.lazerpointer();
    }
    else {
        console.log("Hissss!")
    }
    
 },
 
 pet: function() {
    this.hunger+= 10;  
    this.happiness+= 20;
    console.log("Meow Meow")
 },
 
 lazerpointer: function() {
    this.sleepyness -= 40;
    this.happiness += 50;
    console.log("Purrrrrr")
 }
 
};

myCat.play();