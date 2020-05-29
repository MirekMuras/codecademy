const manu = {
    _courses:  {
        appetizers: [],
        get appetizers() {},
        set appetizers(appetizersIn) {},
  
        mains: [],
        get mains() {},
        set mains(mainsIn) {},
  
        dessert: [],
        get dessert() {},
        set dessert(dessertIn) {},
    },
  
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
  
   
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        dishName,
        dishPrice,
        }
      return this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse(courseName) {
      const dishes = courseName;
      const randomindex = Math.floor(Math.random() * dishes.length);
      return dishes[randomindex]
    },
  
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
  
      return `Your apetizer is : ${appetizer.name}, with the main course: ${main.name}, ... The price is $ ${totalPrice}.`;
    },
  }
  
  manu.addDishToCourse('appetizers', 'Pasta', 15);
  
  let meal = manu.generateRandomMeal();
  
  console.log(meal)