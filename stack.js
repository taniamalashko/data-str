// Стек — это структура данных, которая работает по принципу LIFO (Last In, First Out)

class Stack {
  constructor() {
      this.items = []; // Пустой массив для хранения элементов стека
  }

  // Метод для добавления элемента в стек (на вершину)
  push(element) {
      this.items.push(element); // Добавляем элемент на вершину стека
  }

  // Метод для удаления и возврата верхнего элемента стека
  pop() {
      if (this.isEmpty()) {
          return "Stack is empty"; // Если стек пуст, возвращаем сообщение
      }
      return this.items.pop(); // Удаляем и возвращаем последний элемент массива (вершина стека)
  }

  // Метод для просмотра верхнего элемента стека без удаления
  peek() {
      if (this.isEmpty()) {
          return "Stack is empty"; // Если стек пуст, возвращаем сообщение
      }
      return this.items[this.items.length - 1]; // Возвращаем последний элемент массива (верхний элемент стека)
  }

  // Метод для проверки, пуст ли стек
  isEmpty() {
      return this.items.length === 0; // Возвращаем true, если длина массива равна 0
  }

  // Метод для возврата количества элементов в стеке
  size() {
      return this.items.length; // Возвращаем длину массива (количество элементов в стеке)
  }

  // Метод для очистки стека
  clear() {
      this.items = []; // Очищаем массив, тем самым очищая стек
  }
}

// Пример использования стека
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30

console.log(stack.pop());  // 30
console.log(stack.pop());  // 20

console.log(stack.size()); // 1

console.log(stack.isEmpty()); // false
