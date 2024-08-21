// Множество — это структура данных, которая представляет собой коллекцию уникальных элементов

// Создание множества
let mySet = new Set();

// Добавление элементов
mySet.add(5);
mySet.add(3);
mySet.add(11);

// Удаление элементов
mySet.delete(3);

// Проверка на наличие элементов
mySet.has(5); // true
mySet.has(10); // false

// Размер множества
console.log(mySet.size);

// Очистка множества
mySet.clear();

// Перебор элементов, for of и foreach
for( let item of mySet) {
  console.log(item);
}

mySet.forEach ((item) => {
  console.log(item);
});
