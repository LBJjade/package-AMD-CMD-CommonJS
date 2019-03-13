// picker @see https://github.com/zhoushengmufc/iosselect
(function () {
  /**
   * 初始化变量
   */
  var $selectPlate = document.querySelector('#selectPlate') // 出发选择车牌选择器的dom
  var plateSelectData = {
    id: 1,
    sid: 1
  } // 选择器初始化选择
  var cardNums = [ // 地区和车牌信息
    ['粤', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z'],
    ['京', 'A,B,C,E'],
    ['冀', 'A,B,C,D,E,F,G,H,J,R,S,T'],
    ['辽', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P'],
    ['皖', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S'],
    ['苏', 'A,B,C,D,E,F,G,H,J,K,L,M,N'],
    ['鄂', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S'],
    ['晋', 'A,B,C,D,E,F,G,H,J,K,L,M'],
    ['吉', 'A,B,C,D,E,F,G,H,J'],
    ['宁', 'A,B,C,D,E'],
    ['琼', 'A,B,C,D,E'],
    ['津', 'A,B,C'],
    ['豫', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,U'],
    ['黑', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,R'],
    ['鲁', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S,U,V'],
    ['浙', 'A,B,C,D,E,F,G,H,J,K,L'],
    ['桂', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,R'],
    ['蒙', 'A,B,C,D,E,F,G,H,J,K,L,M'],
    ['闽', 'A,B,C,D,E,F,G,H,J,K'],
    ['川', 'A,B,C,D,E,F,H,J,K,L,M,N,P,Q,R,S,T,U,V,W,X,Y,Z'],
    ['渝', 'A,B,C,F,G,H'],
    ['沪', 'A,B,C,D,R'],
    ['云', 'A,A,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,S'],
    ['湘', 'A,B,C,D,E,F,G,H,J,K,L,M,N,U'],
    ['新', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R'],
    ['赣', 'A,B,C,D,E,F,G,H,J,K,L,M'],
    ['甘', 'A,B,C,D,E,F,G,H,J,K,L,M,N,P'],
    ['陕', 'A,B,C,D,E,F,G,H,J,K,V'],
    ['贵', 'A,B,C,D,E,F,G,H,J'],
    ['青', 'A,B,C,D,E,F,G,H'],
    ['藏', 'A,B,C,D,E,F,G,H,J']
  ];
  var plateData = [
  ] // 车牌列表
  var plateLetterData = [
  ] // 车牌列表

  var $selectCardType = document.querySelector('#selectCardType') // 出发选择车牌选择器的dom
  var cardTypeSelectData = {
    id: 1,
    value: '客车'
  } // 选择器初始化选择
  var cardTypeData = [
    {
      id: 1,
      value: '客车'
    },
    {
      id: 2,
      value: '类型2'
    },
    {
      id: 3,
      value: '类型3'
    },
    {
      id: 4,
      value: '类型4'
    },
    {
      id: 5,
      value: '类型5'
    }
  ] // 车牌列表

  /**
   * 构造二级联动数据
   */
  cardNums.forEach(function(item, index) {
    plateData.push({
      id: index + 1,
      value: item[0],
      parentId: 0
    })
    var letters = item[1].split(',')
    console.log(letters)
    letters.forEach(function (letter, indexLetter) {
      plateLetterData.push({
        id: indexLetter + 1,
        value: letter,
        parentId: index + 1
      })
    })
  })
  console.log(plateData)
  console.log(plateLetterData)
  /**
   * 绑定选择器
   */
  $selectPlate.addEventListener('click', function () {
    bindSelectEvent({
      selectData: [plateData, plateLetterData],
      curSelectData: plateSelectData,
      level: 2,
      relation: [1, 1],
      successCallBack : function (selectObj1, selectObj2) {
        plateSelectData.id = selectObj1.id
        plateSelectData.sid = selectObj2.id
        $selectPlate.innerText = selectObj1.value + selectObj2.value
        $selectPlate.setAttribute('data-id', selectObj1.id)
        $selectPlate.setAttribute('data-letter-id', selectObj2.id)
        $selectPlate.setAttribute('data-letter', selectObj2.value)
        $selectPlate.setAttribute('data-area', selectObj1.value)
      },
      cancelCallBack : function () {
        console.log('cancel')
      }
    })
  }, false)

  $selectCardType.addEventListener('click', function () {
    bindSelectEvent({
      selectData: [cardTypeData],
      curSelectData: cardTypeSelectData,
      successCallBack : function (selectObj) {
        console.log(selectObj)
        cardTypeSelectData = selectObj
        $selectCardType.innerText = selectObj.value
        $selectCardType.setAttribute('data-id', selectObj.id)
      },
      cancelCallBack : function () {
        console.log('cancel')
      }
    })
  }, false)

  /**
   * 绑定选择器
   *
   * @param {*} options
   * @param {*} options.selectData // 选择列表
   * @param {*} options.curSelectData // 当前选择的结果（{id: id, value: value}）
   * @param {*} options.successCallBack // 用户确认选择后的回调函数
   * @param {*} options.cancelCallBack // 取消后的回调函数
   */
  function bindSelectEvent (options) {
    /**
     * 绑定事件
     */
    var selectData = options.selectData
    var curSelectData = options.curSelectData
    var successCallBack = options.successCallBack
    var cancelCallBack = options.cancelCallBack
    var level = options.level || 1
    var relation = options.relation || [0, 0, 0, 0]
    console.log(curSelectData)
    var selectObj = new IosSelect(level,               // 第一个参数为级联层级，演示为1
      selectData,
      {
        container: '.select-picker',  // 容器class
        itemHeight: 48, // 每个元素的高度
        itemShowCount: 5, // 每一列显示元素个数，超出将隐藏
        oneLevelId: curSelectData.id, // 第一级默认值
        twoLevelId: curSelectData.sid, // 第二级默认值
        relation: relation, // [第一二级是否关联，第二三级是否关联，第三四级是否关联，第四五级是否关联] ，默认不关联，即默认是[0, 0, 0, 0]
        callback (selectObj1, selectObj2) {  // 用户确认选择后的回调函数
          successCallBack && typeof successCallBack === 'function' && successCallBack(selectObj1, selectObj2)
        },
        fallback () { // 取消后的回调函数
          cancelCallBack && typeof cancelCallBack === 'function' && cancelCallBack()
        },
        maskCallback () { // 取消后的回调函数
          cancelCallBack && typeof cancelCallBack === 'function' && cancelCallBack()
        }
      }
    )
    console.log(selectObj)
  }

  $(document)
  /**
   * jquery 点击车牌颜色变色
   */
  .on('click', '#colorList .color-item', function () {
    var $this = $(this)
    $this.siblings().removeClass('e-active').end().addClass('e-active')
    var index = $this.index()
    $('#plateBox').removeClass().addClass('plate-box e-type-' + index)
  })
  /**
   * 选中活动规则
   */
  .on('click', '#isAgree', function () {
    var $this = $(this)
    $this.toggleClass('e-active')
    $('#nextBtn').toggleClass('e-disable')
  })

})()