/* timer */
$(document).ready(function(){
  jQuery('form').customForm();

  $('.simplebox').simplebox();

  $('.slide').gallery({
    flexible: true,
    infinite: true,
    autoRotation: 3000
  });

  jcf.replaceAll();

  $("#tel, #tel2, #tel3 ").mask("+38(999) 999-9999");

  $('a.btn-order').click(function(){ 
    let anchor = $(this).attr('href');  
      $('html, body').animate({           
      scrollTop:  $(anchor).offset().top  
    }, 600);                            
  });
});

$(function() {
    $(window).scroll(function() {
     if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();
      } else {
        $('#toTop').fadeOut();
      }
    });
  $('#toTop').click(function() {
  $('body,html').animate({scrollTop:0},800);
 });

});

function update() {
  var Now = new Date(), Finish = new Date();
  Finish.setHours( 23);
  Finish.setMinutes( 59);
  Finish.setSeconds( 59);
  if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
    Finish.setDate( Finish.getDate() + 1);
  }
  var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
  var hrs = Math.floor( sec / 3600);
  sec -= hrs * 3600;
  var min = Math.floor( sec / 60);
  sec -= min * 60;
  $(".timer .hours").html( pad(hrs));
  $(".timer .minutes").html( pad(min));
  $(".timer .seconds").html( pad(sec));
  setTimeout( update, 200);
}
function pad(s) {
  s = ("00"+s).substr(-2);
  return "<span>" + s[0] + "</span><span>" + s[1] + "</span>";
}
update();



function chooseAvto() {
  var el = $(".list-avto li a");
  var elModal = $(".list-avto-modal li");

  el.click(function(){
    var idAvto = $(this).data('id');
    
    jQuery.each(elModal, function() {
      $(this).removeClass("active");
      if($(this).data('avto') == idAvto){
        $(this).addClass("active");
      }
     });
    var val = text = idAvto;
    $(".select-modal option[value=" + val + "]").attr('selected', 'true');
    jcf.replaceAll();
   });
}

chooseAvto();


$("form").submit(function () {
    // Получение ID формы
    var formID = $(this).attr('id');
    // Добавление решётки к имени ID
    var formNm = $('#' + formID);

    $.ajax({
        type: "POST",
        url: 'index.php',
        data: formNm.serialize(),
        beforeSend: function () {
            // Вывод текста в процессе отправки
            $(formNm).html('<p style="text-align:center">Отправка...</p>');
        },
        success: function (data) {
            // Вывод текста результата отправки
            $(formNm).html('<p style="text-align:center">'+data+'</p>');
        },
        error: function (jqXHR, text, error) {
            // Вывод текста ошибки отправки
            $(formNm).html(error);
        }
    });
    return false;
});
