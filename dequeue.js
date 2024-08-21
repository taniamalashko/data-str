// Двухсторонняя очередь — это структура данных, которая позволяет добавлять и удалять элементы как с начала, так и с конца.

class Deque {
  constructor() {
      this.items = []; // Пустой массив для хранения элементов deque
  }

  // Метод для добавления элемента в начало очереди
  addFront(element) {
      this.items.unshift(element); // Добавляем элемент в начало массива
  }

  // Метод для добавления элемента в конец очереди
  addBack(element) {
      this.items.push(element); // Добавляем элемент в конец массива
  }

  // Метод для удаления элемента с начала очереди
  removeFront() {
      if (this.isEmpty()) {
          return "Dequeue is empty"; // Если очередь пуста, возвращаем сообщение
      }
      return this.items.shift(); // Удаляем и возвращаем первый элемент массива
  }

  // Метод для удаления элемента с конца очереди
  removeBack() {
      if (this.isEmpty()) {
          return "Dequeue is empty"; // Если очередь пуста, возвращаем сообщение
      }
      return this.items.pop(); // Удаляем и возвращаем последний элемент массива
  }

  // Метод для просмотра первого элемента в очереди без его удаления
  peekFront() {
      if (this.isEmpty()) {
          return "Очередь пуста"; // Если очередь пуста, возвращаем сообщение
      }
      return this.items[0]; // Возвращаем первый элемент массива
  }

  // Метод для просмотра последнего элемента в очереди без его удаления
  peekBack() {
      if (this.isEmpty()) {
          return "Очередь пуста"; // Если очередь пуста, возвращаем сообщение
      }
      return this.items[this.items.length - 1]; // Возвращаем последний элемент массива
  }

  // Метод для проверки, пуста ли очередь
  isEmpty() {
      return this.items.length === 0; // Возвращаем true, если длина массива равна 0
  }

  // Метод для возврата количества элементов в очереди
  size() {
      return this.items.length; // Возвращаем длину массива (количество элементов в deque)
  }

  // Метод для очистки очереди
  clear() {
      this.items = []; // Очищаем массив, тем самым очищая deque
  }
}

// Пример использования двухсторонней очереди
let deque = new Deque();

deque.addFront(10);
deque.addBack(20);
deque.addFront(30);

console.log(deque.peekFront()); // 30 
console.log(deque.peekBack());  // 20

console.log(deque.removeFront()); // 30
console.log(deque.removeBack());  // 20

console.log(deque.size()); // 1
