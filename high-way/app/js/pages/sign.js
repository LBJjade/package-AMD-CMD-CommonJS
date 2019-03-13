(function () {
  $(document)
  /**
   * 选中活动规则
   */
  .on('click', '#isAgree', function () {
    var $this = $(this)
    $this.toggleClass('e-active')
    $('#nextBtn').toggleClass('e-disable')
  })
})()