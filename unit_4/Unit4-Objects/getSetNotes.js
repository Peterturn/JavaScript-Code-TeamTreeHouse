const person = {
  firstName: 'Peter',
  lastName: 'May',

  //This is called a methode and is basically the saem as a fuction.
    /*
    by adding 'get' before the methode/function we can call
    'fullName' like a property
     */
  get fullName(){
    return `${person.firstName} ${person.lastName}`;
  },

  //setter => change (mutate) properties
      //with a setter we can change the properties from the outside... like name.
  set fullName(value){
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];

  }
};

person.fullName = 'John Smith';

//getters => access properties
    //with a getter we can get the persons fullName like a property



console.log(person.fullName);
