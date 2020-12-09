$(function () { 

$('.active').click(function () { 
  // $(this).siblings('.active1').slideDown(400).parent().siblings().children('.active1').slideUp(400)
  $(this).siblings('.active1').slideToggle(400).parent().siblings().children('.active1').slideUp()
})

// console.log($('.row>button'));
$('.row>button').click(function () { 
  // 需求1：给城市按钮添加阴影效果
$(this).addClass('btn-shadow').siblings('button').removeClass('btn-shadow')
  // 需求2:点击按钮下方联系显示
  // 获取下标
  var idx = $(this).index()
  $('.menu').eq(idx).addClass('block').siblings('.menu').removeClass(('block'))
$('.city').text($(this).text())
  // console.log($(this).text());
 })
//  console.log($('.city').text());
  })



//  }

 
 
 
//  })
