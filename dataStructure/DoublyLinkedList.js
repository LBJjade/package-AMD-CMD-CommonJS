function DoublyLinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next = null;
    this.prev = null; //新
  };
  var length = 0;
  var head = null;
  var tail = null; //新 对最后一项的引用

  //方法

  this.append = function(element) {
    var node = new Node(element),
      current;

    if (head === null) {
      //链表为空，添加到首部
      head = node;
      tail = node; //新
    } else {
      current = head;
      //循环链表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋为node，建立连接
      current.next = node;
      tail = node; //新
    }
    length++;
  };

  this.insert = function(position, element) {
    //检查是否越界
    if (position >= 0 && position <= length) {
      var node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        //在第一个位置添加
        if (!head) {
          //新
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; //新
          head = node;
        }
      } else if (position === length) {
        //新 最后一项
        //改变指针，再把node赋值给tail
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //通过改变指针，将node链接在previous和current之间
        node.next = current;
        previous.next = node;

        current.prev = node; //新
        node.prev = previous; //新
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position) {
    //检查是否越界
    if (position > -1 && position < length) {
      var current = head,
        previous,
        index = 0;

      if (position === 0) {
        //移除第一项
        head = current.next;
        //新 如果只有一项，更新tail
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        //新 最后一项
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来，跳过current，从而移除它
        previous.next = current.next;
        current.next.prev = previous; //新
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
}




