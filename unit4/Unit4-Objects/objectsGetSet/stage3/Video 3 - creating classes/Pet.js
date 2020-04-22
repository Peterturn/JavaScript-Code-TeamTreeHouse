class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  get activity(){
    const today = new Date();
    const hour = today.getHours();

    if(hour > 8 && hour <=20){
      return 'playing';
      }else{return 'sleeepin';}
    }

  get owner(){
    return this._owner;
  }

  set owner(owner){
    this._owner = owner;
    console.log('setter called: ${owner}');
  }

  speak(){
    console.log(this.sound);
    //return this.age.toString();
  }
}


const ernie = new Pet('dog', 1, 'pug', 'yip yip');
const muffin = new Pet('dog', 4, 'dobberman', 'woof');
const tiger = new Pet('cat', 3, 'mix', 'meow');

//setting the name in the setter method
 


console.log(ernie);
console.log(muffin);
console.log(tiger);

//calling the method
ernie.speak();
muffin.speak();
tiger.speak();

//calling the get activity
console.log(ernie.activity);
