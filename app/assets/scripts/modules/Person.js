class Person {
  constructor(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
  }

  greet() {
    console.log("Hi, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }

}

export default Person 