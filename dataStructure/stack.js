function LinkedStack() {
  //节点结构定义
  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  var length = 0,
    top; //栈顶指针
  //压栈操作
  this.push = function(element) {
    var node = new Node(element),
      current;

    if (!top) {
      top = node;
      length++;
      return true;
    } else {
      node.next = top;
      top = node;
      length++;
      return true;
    }
  };
  //退栈操作
  this.pop = function() {
    var current = top;
    if (top) {
      top = current.next;
      current.next = null;
      length--;
      return current;
    } else {
      return 'null stack';
    }
  };
  //获取栈顶节点
  this.top = function() {
    return top;
  };
  //获取栈长
  this.size = function() {
    return length;
  };

  this.toString = function() {
    var string = '',
      current = top;

    while (current) {
      string += current.element;
      current = current.next;
    }

    return string;
  };
  //清空栈
  this.clear = function() {
    top = null;
    length = 0;

    return true;
  };
}
