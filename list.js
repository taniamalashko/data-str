//Структура одного узла
class ListNode {
  constructor(value) {
      this.value = value; // Значение узла
      this.next = null;   // Ссылка на следующий узел
  }
}

class LinkedList {
  constructor() {
      this.head = null; // Начало списка (голова)
  }
  
  // Добавление элемента в конец
  append(value) {
      let newNode = new ListNode(value);
      
      if (!this.head) {
          this.head = newNode; // Если список пуст, новый узел становится головой
      } else {
          let current = this.head; // Находим голову и назначаем текущим элементом
          while (current.next) {
              current = current.next;
          } // Ищем последний узел, у которого нет next
          current.next = newNode; // Добавляем в конец
      }
  }

    // Добавление элемента в начало
    prepend(value) {
        let newNode = new ListNode(value);
        
        if (!this.head) {
            this.head = newNode; // Если список пуст, новый узел становится головой
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }
  
  // Вывод списка
  print() {
      let current = this.head;
      while (current) {
          console.log(current.value);
          current = current.next;
      }
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(30);

list.print(); // 30, 10, 20
