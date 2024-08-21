// Структура одного узла
class DoublyListNode {
  constructor(value) {
      this.value = value;
      this.next = null;   // Ссылка на следующий узел
      this.prev = null;   // Ссылка на предыдущий узел
  }
}

class DoublyLinkedList {
  constructor() {
      this.head = null;   // Начальный элемент списка (голова)
      this.tail = null;   // Конечный элемент списка (хвост)
  }

  // Добавление элемента в конец
  append(value) {
      let newNode = new DoublyListNode(value);
      
      if (!this.head) { // Если список пуст, назначаем первый узел и головой и хвостом
          this.head = newNode;
          this.tail = newNode;
      } else { // Если в списке  уже есть элементы, назначаем узел в next хвоста, хвост назначем в prev узла и делаем его хвостом
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
  }

  // Добавление элемента в начало
  prepend(value) {
      let newNode = new DoublyListNode(value);

      if (!this.head) { // Если список пуст, назначаем первый узел и головой и хвостом
          this.head = newNode;
          this.tail = newNode;
      } else { // Если в списке  уже есть элементы, назначаем узел в prev головы, голову назначем в next узла и делаем его головой
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
  }

  // Печать списка с начала
  printForward() {
      let current = this.head;
      while (current) {
          console.log(current.value);
          current = current.next;
      }
  }
  
  // Печать списка с конца
  printBackward() {
      let current = this.tail;
      while (current) {
          console.log(current.value);
          current = current.prev;
      }
  }
}

let dList = new DoublyLinkedList();
dList.append(10);
dList.append(20);
dList.prepend(30);

dList.printForward();  // 30, 10, 20
dList.printBackward(); // 20, 10, 30

