// Куча на основе массива
// Для узла с индексом i:
// Левый дочерний элемент находится по индексу 2 * i + 1.
// Правый дочерний элемент — по индексу 2 * i + 2.
// Родительский элемент — по индексу (i - 1) // 2.

// Вставка элемента (insert):

// Новый элемент добавляется в конец массива (последний доступный узел дерева).
// После добавления элемент "всплывает" вверх по дереву (эта операция называется "heapify up" или "просеивание вверх"), чтобы восстановить свойство кучи.

// Удаление максимального/минимального элемента (extract):

// Удаляется корневой элемент (наибольший в макс-куче или наименьший в мин-куче).
// Последний элемент массива перемещается на место корня.
// Этот элемент "опускается" вниз по дереву (эта операция называется "heapify down" или "просеивание вниз"), чтобы восстановить свойство кучи.

class MaxHeap {
  constructor() {
      this.heap = []; // Массив для хранения элементов кучи
  }

  // Метод для получения индекса родительского узла
  getParentIndex(i) {
      return Math.floor((i - 1) / 2);
  }

  // Метод для получения индекса левого дочернего узла
  getLeftChildIndex(i) {
      return 2 * i + 1;
  }

  // Метод для получения индекса правого дочернего узла
  getRightChildIndex(i) {
      return 2 * i + 2;
  }

  // Метод для вставки нового элемента в кучу
  insert(value) {
      this.heap.push(value); // Добавляем элемент в конец массива
      this.heapifyUp();      // Восстанавливаем свойство кучи (просеивание вверх)
  }

  // Просеивание вверх, чтобы восстановить свойство макс-кучи после добавления элемента
  heapifyUp() {
      let index = this.heap.length - 1; // Индекс только что добавленного элемента
      while (index > 0) { // Пока элемент не находится на вершине кучи
          let parentIndex = this.getParentIndex(index);

          // Если значение родительского узла меньше текущего, меняем их местами
          if (this.heap[parentIndex] < this.heap[index]) {
              [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
              index = parentIndex; // Поднимаем индекс вверх
          } else {
              break; // Если свойство кучи выполняется, выходим из цикла
          }
      }
  }

  // Метод для удаления корневого элемента (максимума)
  extractMax() {
      if (this.heap.length === 0) {
          return null; // Если куча пуста, возвращаем null
      }

      // Корневой элемент (максимальный)
      const max = this.heap[0];

      // Перемещаем последний элемент в корень и удаляем его из конца массива
      this.heap[0] = this.heap.pop();
      
      // Восстанавливаем свойство кучи (просеивание вниз)
      this.heapifyDown();

      return max; // Возвращаем удалённый максимальный элемент
  }

  // Просеивание вниз, чтобы восстановить свойство макс-кучи после удаления элемента
  heapifyDown() {
      let index = 0; // Начинаем с корня
      const length = this.heap.length;

      while (true) {
          let leftChildIndex = this.getLeftChildIndex(index);
          let rightChildIndex = this.getRightChildIndex(index);
          let largestIndex = index;

          // Проверяем, если левый дочерний узел больше текущего
          if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
              largestIndex = leftChildIndex;
          }

          // Проверяем, если правый дочерний узел больше текущего или левого
          if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
              largestIndex = rightChildIndex;
          }

          // Если наибольший элемент уже на своём месте, выходим из цикла
          if (largestIndex === index) {
              break;
          }

          // Меняем местами текущий узел с наибольшим дочерним
          [this.heap[index], this.heap[largestIndex]] = [this.heap[largestIndex], this.heap[index]];

          // Продолжаем просеивание вниз
          index = largestIndex;
      }
  }

  // Метод для получения максимального элемента без удаления
  peek() {
      return this.heap.length === 0 ? null : this.heap[0];
  }
}

const heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);

console.log(heap.peek()); // 30 (максимальный элемент в куче)

console.log(heap.extractMax()); // 30 (удаляем и возвращаем максимальный элемент)
console.log(heap.extractMax()); // 20 (следующий по величине элемент)
console.log(heap.extractMax()); // 10
console.log(heap.extractMax()); // 5

