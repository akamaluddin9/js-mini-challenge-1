function pizzaMozarella(score) {
  // Tulis kodingan dibawah ini
  for (let x = 1; x <= score; x++) {
    if (x % 3 == 0 && x % 5 == 0) {
      result = 'PizzaMozzarella';
    } else if (x % 5 == 0) {
      result = 'Mozarella';
    } else if (x % 3 == 0) {
      result = 'Pizza';
    } else {
      result = x;
    } 
    console.log(result);
  }
}
// Test Case
console.log(pizzaMozarella(15));
// 1
// 2
// Pizza
// 4
// Mozarella
// Pizza
// 7
// 8
// Pizza
// Mozarella
// 11
// Pizza
// 13 
// 14
// PizzaMozarella