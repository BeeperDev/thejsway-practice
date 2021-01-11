// Dogs
// Complete the following program to add the definition of the Dog class.
// Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! Woof!".
// TODO: define the Dog class here

class Dog {
    constructor(name, species, size){
      this.name = name
      this.species = species
      this.size = size
    }
    bark(){
      if(this.size > 60){
        return "Grrr! Grrr!"
      }else{
        return "Woof! Woof!"
      }
    }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);





// Fang is a boarhound dog measuring 75"
// "Look, a cat! Fang barks: Grr! Grr!"
// "Snowy is a terrier dog measuring 22"
// "Look, a cat! Snowy barks: Woof! Woof!"