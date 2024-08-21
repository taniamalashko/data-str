// Очередь — это структура данных, которая работает по принципу FIFO (First In, First Out)

class Queue {
  constructor() {
      this.items = []; // Пустой массив для хранения элементов очереди
  }

  // Метод для добавления элемента в конец очереди
  enqueue(element) {
      this.items.push(element); // Добавляем элемент в конец массива (конец очереди)
  }

  // Метод для удаления и возврата элемента из начала очереди
  dequeue() {
      if (this.isEmpty()) {
          return "Queue is empty"; // Если очередь пуста, возвращаем сообщение
      }
      return this.items.shift(); // Удаляем и возвращаем первый элемент массива (начало очереди)
  }

  // Метод для просмотра первого элемента в очереди без его удаления
  peek() {
      if (this.isEmpty()) {
          return "Queue is empty"; // Если очередь пуста, возвращаем сообщение
      }
      return this.items[0]; // Возвращаем первый элемент массива (первый в очереди)
  }

  // Метод для проверки, пуста ли очередь
  isEmpty() {
      return this.items.length === 0; // Возвращаем true, если длина массива равна 0
  }

  // Метод для возврата количества элементов в очереди
  size() {
      return this.items.length; // Возвращаем длину массива (количество элементов в очереди)
  }

  // Метод для очистки очереди
  clear() {
      this.items = []; // Очищаем массив, тем самым очищая очередь
  }
}

let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek()); // 10

console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20

console.log(queue.size()); // 1

console.log(queue.isEmpty()); // false
