function LinkedList() {
  //辅助类 表示要加入链表的项
  var Node = function(element) {
    this.element = element;
    this.next = null; //指向链表中下一个节点项的指针
  };

  var length = 0;
  var head = null;

  // this.append = function (element) {}; //向链表尾部添加一个新的项
  // this.insert = function (position, element) {}; //向链表特定位置插入一个新的项
  // this.removeAt = function (position) {}; //从链表特定位置移除一项
  // this.remove = function (element) {}; //从链表中移除一项
  // this.indexOf = function (element) {}; //返回元素在链表中的索引，如果没有则返回-1
  // this.isEmpty = function () {}; //判断链表是否为空
  // this.size = function () {}; //返回链表包含元素个数
  // this.getHead = function () {}; //返回链表第一个元素
  // this.toString = function () {}; //只输出元素的值
  // this.print = function () {};

  this.append = function(element) {
    var node = new Node(element),
      current;

    if (head === null) {
      //链表为空，添加到首部
      head = node;
    } else {
      current = head;
      //循环链表，直到找到最后一项
      while (current.next) {
        current = current.next;
      }
      //找到最后一项，将其next赋为node，建立连接
      current.next = node;
    }
    length++;
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
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //将previous与current的下一项链接起来，跳过current，从而移除它
        previous.next = current.next;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
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
        node.next = current;
        head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        //通过改变指针，将node链接在previous和current之间
        node.next = current;
        previous.next = node;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  //只输出链表中元素
  this.toString = function() {
    var current = head,
      string = '';
    while (current) {
      string += ',' + current.element;
      current = current.next;
    }
    return string.slice(1);
  };

  this.indexOf = function(element) {
    var current = head,
      index = 0;
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  };
  this.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
  };
  this.size = function() {
    return length;
  };

  //head是一个私有变量，当需要在类的实现外部循环访问链表时，就可以使用getHead方法获取类的第一个元素
  this.getHead = function() {
    return head;
  };

  this.print = function() {
    console.log(this.toString());
  };
}
