// 冒泡
function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]];
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}

// 优化1
function bubbleSort1(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 外层循环初始值为 false，没有发生交换
    let has_exchanged = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        has_exchanged = true;
      }
    }
    // 内层循环结束判断一下是否发生了交换
    if (!has_exchanged) break;
  }
  return arr;
}

// 优化2
function bubbleSort2(arr) {
  // 遍历结束位置的初始值为数组尾，并逐渐向数组头部逼近
  let high = arr.length - 1;
  while (high > 0) {
    // 本次内层遍历发生交换的位置的初始值
    let position = 0;
    for (let j = 0; j < high; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        // 如果发生了交换，更新 position
        position = j;
      }
    }
    // 下次遍历只需要到 position 的位置即可
    high = position;
  }
  return arr;
}

// 优化3
function bubbleSort3(arr) {
  let low = 0,
    high = arr.length - 1;
  while (low < high) {
    // 正向遍历找最大
    for (let i = low; i <= high; i++)
      if (arr[i] > arr[i + 1]) swap(arr, i, i + 1);
    high--;
    // 反向遍历找最小
    for (let j = high; j >= low; j--)
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
    low++;
  }
  return arr;
}

// 选择排序
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    // 遍历后面的部分，寻找更小值
    for (let j = i + 1; j < arr.length; j++) {
      // 如果有，更新min_index
      if (arr[j] < arr[min_index]) min_index = j;
    }
    swap(arr, i, min_index);
  }
  return arr;
}

// 堆排序
// 排序
function heapSort(arr) {
  var arr_length = arr.length;
  if (arr_length <= 1) return arr;
  // 1. 建最大堆
  // 遍历一半元素就够了
  // 必须从中点开始向左遍历，这样才能保证把最大的元素移动到根节点
  for (var middle = Math.floor(arr_length / 2); middle >= 0; middle--)
    maxHeapify(arr, middle, arr_length);
  // 2. 排序，遍历所有元素
  for (var j = arr_length; j >= 1; j--) {
    // 2.1. 把最大的根元素与最后一个元素交换
    swap(arr, 0, j - 1);
    // 2.2. 剩余的元素继续建最大堆
    maxHeapify(arr, 0, j - 2);
  }
  return arr;
}
// 建最大堆
function maxHeapify(arr, middle_index, length) {
  // 1. 假设父节点位置的值最大
  var largest_index = middle_index;
  // 2. 计算左右节点位置
  var left_index = 2 * middle_index + 1,
    right_index = 2 * middle_index + 2;
  // 3. 判断父节点是否最大
  // 如果没有超出数组长度，并且子节点比父节点大，那么修改最大节点的索引
  // 左边更大
  if (left_index <= length && arr[left_index] > arr[largest_index])
    largest_index = left_index;
  // 右边更大
  if (right_index <= length && arr[right_index] > arr[largest_index])
    largest_index = right_index;
  // 4. 如果 largest_index 发生了更新，那么交换父子位置，递归计算
  if (largest_index !== middle_index) {
    swap(arr, middle_index, largest_index);
    // 因为这时一个较大的元素提到了前面，一个较小的元素移到了后面
    // 小元素的新位置之后可能还有比它更大的，需要递归
    maxHeapify(arr, largest_index, length);
  }
}

// 插入排序
// 按照第一种理解方式的实现，即一般的实现
function insertionSort(arr) {
  for (let index = 1; index < arr.length; index++) {
    // 取出一个未排序元素
    let current_ele = arr[index];
    // 已排序元素的最后一个的位置
    let ordered_index = index - 1;
    // 前面的元素更大，并且还没遍历完
    while (arr[ordered_index] >= current_ele && ordered_index >= 0) {
      // 使用前面的值覆盖当前的值
      arr[ordered_index + 1] = arr[ordered_index];
      // 向前移动一个位置
      ordered_index--;
    }
    // 遍历完成，前面的元素都比当前元素小，把未排序元素赋值进去
    arr[ordered_index + 1] = current_ele;
  }
  return arr;
}
// 按照第二种理解方式的实现
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 对前面的已排序数组和新选出来的元素执行一趟冒泡排序
    for (let j = i + 1; j >= 0; j--)
      if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
  }
  return arr;
}

// 希尔排序
function shellSort(arr) {
  // 外层循环逐步缩小增量 gap 的值
  for (let gap = 5; gap > 0; gap = Math.floor(gap / 2)) {
    // 中层和内层是插入排序
    // 普通插入排序从第1个元素开始，这里分组了，要看每一组的第1个元素
    // 共分成了 gap 组，第一组的第1个元素索引为 gap
    // 第一组元素索引为 0, 0+gap, 0+2*gap，...，第二组元素索引为 1, 1+gap, 2+2*gap，...
    for (let i = gap; i < arr.length; i++) {
      let current_ele = arr[i];
      // 普通插入排序时，j 每次减少1，即与前面的每个元素比较
      // 这里 j 每次减少 gap，只会与当前元素相隔 n*(gap-1) 的元素比较，也就是只会与同组的元素比较
      let ordered_index = i - gap;
      while (ordered_index >= 0 && arr[ordered_index] > current_ele) {
        arr[ordered_index + gap] = arr[ordered_index];
        ordered_index -= gap;
      }
      arr[ordered_index + gap] = current_ele;
    }
  }
  return arr;
}



// 快速排序
function quickSort(arr) {
  // 只剩1个元素，不能再分割了
  if (arr.length <= 1) return arr;
  // 取第1个元素为基准值
  let base = arr[0];
  // 分割为左小右大两个数组，以及包含元素本身的中间数组
  let left = [],
    middle = [base],
    right = [];
  for (let index = 1; index < arr.length; index++) {
    // 如果有与本身一样大的元素，放入 middle 数组，解决重复元素的问题
    if (arr[index] === base) middle.push(arr[index]);
    else if (arr[index] < base) left.push(arr[index]);
    else right.push(arr[index]);
  }
  // 递归并连接
  return quickSort(left).concat(middle, quickSort(right));
}

// 归并排序
// 分割
function mergeSort2(arr) {
  // 如果只剩一个元素，分割结束
  if (arr.length < 2) return arr;
  // 否则继续分成两部分
  let middle_index = Math.floor(arr.length / 2),
    left = arr.slice(0, middle_index),
    right = arr.slice(middle_index);
  return merge2(mergeSort2(left), mergeSort2(right));
}
// 合并
function merge2(left, right) {
  let result = [];
  // 当左右两个数组都还没有取完的时候，比较大小然后合并
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  // 其中一个数组空了，另一个还剩下一些元素
  // 因为是已经排序过的，所以直接concat就好了
  // 注意 concat 不改变原数组
  if (left.length) result = result.concat(left);
  if (right.length) result = result.concat(right);
  return result;
}
repo;

// 计数排序
function countingSort(array) {
  let count_arr = [],
    result_arr = [];
  // 统计出现次数
  for (let i = 0; i < array.length; i++) {
    count_arr[array[i]] = count_arr[array[i]] ? count_arr[array[i]] + 1 : 1;
  }
  // 遍历统计数组，放入结果数组
  for (let i = 0; i < count_arr.length; i++) {
    while (count_arr[i] > 0) {
      result_arr.push(i);
      count_arr[i]--;
    }
  }
  return result_arr;
}

// LSD
function radixSortLSD(arr) {
  // 找出最大元素
  let max_num = Math.max(...arr),
    // 获取其位数
    max_len = getLengthOfNum(max_num);
  console.log(`最大元素是 ${max_num}，长度 ${max_len}`);
  // 外层遍历位数，内层遍历数组
  // 外层循环以最大元素的位数作为遍历次数
  for (let digit = 1; digit <= max_len; digit++) {
    // 初始化0-9 10个数组，这里暂且叫做桶
    let buckets = [];
    for (let i = 0; i < 10; i++) buckets[i] = [];
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
      // 取出一个元素
      let ele = arr[i];
      // 获取当前元素该位上的值
      let value_of_this_digit = getSpecifiedValue(ele, digit);
      // 根据该值，决定当前元素要放到哪个桶里
      buckets[value_of_this_digit].push(ele);
      console.log(buckets);
    }
    // 每次内层遍历结束，把所有桶里的元素依次取出来，覆盖原数组
    let result = [];
    buckets
      .toString()
      .split(",")
      .forEach(val => {
        if (val) result.push(parseInt(val));
      });
    // 得到了一个排过序的新数组，继续下一轮外层循环，比较下一位
    arr = result;
    console.log(arr);
  }
}

function getLengthOfNum(num) {
  return (num += "").length;
}

// 获取一个数字指定位数上的值，超长时返回0
// 个位的位数是1，十位的位数是2 ...

function getSpecifiedValue(num, position) {
  return (
    (num += "")
      .split("")
      .reverse()
      .join("")[position - 1] || 0
  );
}

// MSD
function getLengthOfNum(num) { return (num += '').length }

// 获取一个数字指定位数上的值，超长时返回0
// 个位的位数是1，十位的位数是2 ...
function getSpecifiedValue(num, position) { return (num += '').split('').reverse().join('')[position - 1] || 0 }

function radixSortMSD(arr) {
  // 最大元素
  let max_num = Math.max(...arr),
    // 获取其位数作为初始值，最小值为1，也就是个位
    digit = getLengthOfNum(max_num)
  return msd(arr, digit)
}
function msd(arr, digit) {
  // 建10个桶
  let buckets = []
  for (let i = 0; i < 10; i++) buckets[i] = []
  // 遍历数组，入桶。这里跟 LSD 一样
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i]
    let value_of_this_digit = getSpecifiedValue(ele, digit)
    buckets[value_of_this_digit].push(ele)
  }
  // 结果数组
  let result = []
  // 遍历每个桶
  for (let i = 0; i < buckets.length; i++) {
    // 只剩一个元素，直接加入结果数组
    if (buckets[i].length === 1) result = result.concat(buckets[i])
    // 还有多个元素，但是已经比较到个位了
    // 说明是重复元素的情况，也直接加入结果数组
    else if (buckets[i].length && digit === 1) result = result.concat(buckets[i])
    // 还有多个元素，并且还没有比较结束，递归比较下一位
    else if (buckets[i].length && digit !== 1) result = result.concat(msd(buckets[i], digit - 1))
    // 空桶就不作处理了
  }
  return result
}