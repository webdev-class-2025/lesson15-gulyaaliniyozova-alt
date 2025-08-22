
// === Карточка товара  ===
let productName = "Беспровадние наушники ";
let price = 150.00;
let discount =10;
let rating = 4.5;
let isAvailable =true;

//
let discountedPrice = price- (price * discount / 100);

//
let availabilityText = isAvailable ? "В наличии " : "Нет в наличии";

// Вывод информация в консоль
console.log(" === Карточка товара===");
console.log( " Название :" , productName);
console.log(" Цена :" , price.toFixed(2) + "$");
console.log(" Скидка:" , discount + "%");
console.log("Цена  со скидкой:", discountedPrice . toFixed(2) +"$");
console.log("Рейтинг" , rating , "из 5");
console.log("Наличие :" , availabilityText );