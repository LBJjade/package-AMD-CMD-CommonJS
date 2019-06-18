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


// 请实现一个 flattenDeep 函数，把嵌套的数组扁平化
// 利用 Array.prototype.flat
// ES6 为数组实例新增了 flat 方法，用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数组没有影响。
// flat 默认只会 “拉平” 一层，如果想要 “拉平” 多层的嵌套数组，需要给 flat 传递一个整数，表示想要拉平的层数。
function flattenDeep(arr){
  return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));


function flattenDeep(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
      // 使用 pop 从 stack 中取出并移除值
      const next = stack.pop();
      if (Array.isArray(next)) {
          // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
          stack.push(...next);
      } else {
          res.push(next);
      }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));


