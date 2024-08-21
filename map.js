// Карта (или Map) в JavaScript — это структура данных, которая хранит пары ключ-значение. 

// Уникальные ключи, любые типы данных для ключей, порядок соответствует добавлению элементов, свойство size

// Создание карты
let myMap = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);

// Добавление элементов
myMap.set('key3', 'value3');
myMap.set('key4', 'value4');

// Чтение элементов
console.log(myMap.get('key1'));

// Проверка наличия ключа
console.log(myMap.has('key2')); // true
console.log(myMap.has('key8')); // false

// Удаление элементов
myMap.delete('key1');

// Размер карты
console.log(myMap.size);

// Очистка карты
// myMap.clear();

// Перебор ключей и значений
for (let key of myMap.keys()) {
  console.log(key);
}

for (let value of myMap.values()) {
  console.log(value);
}

for (let [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`);
}

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

