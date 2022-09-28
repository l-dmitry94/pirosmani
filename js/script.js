$('.owl-carousel.banner__block').owlCarousel({
  loop: true,
  nav: false,
  items: 1
})
$('.owl-carousel.category__block').owlCarousel({
  loop: true,
  margin: 66,
  autoWidth: true,
  nav: true,
  items: 5,
  dots: false,
  navText: ["", "<img src='../img/arrow-slider.svg'>"]
})

$(".page-item").on("click", function (e) {
  e.preventDefault();
  $(".page-item").removeClass("active");
  $(this).each(function () {
    if ($(this).hasClass("exc") || $(this).hasClass("prev") || $(this).hasClass("next")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  })
})

$('.play').on("click", function () {
  $(this).hide();
  $('.yt-video').attr('src', 'https://www.youtube.com/embed/Wqyz5Rb-h7c?autoplay=1')
})

jQuery(function () {
  var j = jQuery; //Just a variable for using jQuery without conflicts
  var addInput = '#qty'; //This is the id of the input you are changing
  var n = 1; //n is equal to 1

  //Set default value to n (n = 1)
  j(addInput).val(n + 'шт');

  //On click add 1 to n
  j('.plus').on('click', function () {
    j(addInput).val(++n + 'шт');
  })

  j('.min').on('click', function () {
    //If n is bigger or equal to 1 subtract 1 from n
    if (n > 1) {
      j(addInput).val(--n + 'шт');
    } else {
      //Otherwise do nothing
    }
  });
});


$("#tabs").tabs();

$(".review-text button").on("click", function (e) {
  e.preventDefault();
  $(this).parent(".review-text").addClass("active");
  $(this).hide();
})


$('.owl-carousel.reviews').owlCarousel({
  loop: false,
  nav: true,
  margin: 16,
  autoWidth: true,
  dots: false,
  items: 2,
  navText: ["", "<span>Ещё</span><img src='../img/reviews-arrow.svg'>"]
})


jQuery(function () {
  var j = jQuery; //Just a variable for using jQuery without conflicts
  var addInput1 = '.qty1'; //This is the id of the input you are changing
  var n = 1; //n is equal to 1

  //Set default value to n (n = 1)
  j(addInput1).val(n);

  //On click add 1 to n
  j('.plus').on('click', function () {
    // j(addInput1).val(++n);
    j(this).parent(".range").children(addInput1).val(++n);
  })

  j('.min').on('click', function () {
    //If n is bigger or equal to 1 subtract 1 from n
    if (n > 1) {
      j(this).parent(".range").children(addInput1).val(--n);
    } else {
      //Otherwise do nothing
    }
  });
});


$(".com-add").next(".form-line").hide();
$(".com-add").prev(".form-line").hide();

$(".com-add").on("click", function (e) {
  e.preventDefault();
  $(this).next(".form-line").show();
  $(this).hide();
})


$(".ordering-choose button").each(function () {
  $(this).on("click", function () {
    $(".ordering-choose button").removeClass("active");
    $(this).addClass("active");
  })
})


//Отработка событий по клику на Доставку и самовывоз
$(function () {
  $('.ordering-choose .pickup').on('click', function () {
    $('.cities, .address, .payment, .com-add, .comment').hide();
    $(".com-add").prev(".form-line").show();
  })
  $('.ordering-choose .delivery').on('click', function () {
    $('.cities, .address, .payment, .com-add').show();
    $(".com-add").prev(".form-line").hide();
  })
})

// Скрипт удаления заказа
$(function () {
  $(".order-item button").on("click", function () {
    $(this).parent().parent().remove();
    calc();
  })
})
// Скрипт доставки и самовывоза
function calc() {
  var sum = 0;
  var delivery = 0;
  var total = 0;
  var sumReplace;
  $('.order-price span').each(function () {
    sum += parseInt($(this).html());
    sumReplace = '<b>' + sum + ' ₽</b>';
  })
  $('.summary').replaceWith(sumReplace);
  $('.total-right b').replaceWith(sumReplace);
  $('.ordering-choose .pickup').on("click", function () {
    delivery = -(sum * 0.2);
    deliveryReplace = '<b class="green">' + delivery + ' ₽</b>';
    $('.delivery .green').replaceWith(deliveryReplace);

    total = sum + delivery;
    console.log(total)
    totalReplace = '<b>' + total + ' ₽</b>';
    $('.total-right b').replaceWith(totalReplace);
  })

  $('.ordering-choose .delivery').on("click", function () {
    delivery = 0;
    deliveryReplace = '<b class="green">' + delivery + ' ₽</b>';
    $('.delivery .green').replaceWith(deliveryReplace);
    $('.total-right b').replaceWith(sumReplace);
  })
}
calc();


$(function () {
  $('.profile-tabs a').each(function (e) {
    $(this).on('click', function (e) {
      e.preventDefault();
      $('.profile-tabs a').removeClass('active');
      $(this).addClass('active');
      var anchor = $(this).attr('href');
      if (anchor == '#tab-2') {
        $('#tab-1').hide();
        $('#tab-2').show();
      } else {
        $('#tab-1').show();
        $('#tab-2').hide();
      }
    })
  })
})

$(function () {
  $('#person').on('click', function (e) {
    e.preventDefault();
    $('.popup-overlay-login').addClass('open');
  })
})

$(function () {
  $('.close').on('click', function (e) {
    $('.popup-overlay-login').removeClass('open');
  })
})


$(function(){
  $('.popup-overlay-login').on('click', function(e){
    var overlay = $('.popup-overlay-login');
    var modal = $('.popup-data');
    if(!modal.is(e.target) && modal.has(e.target).length === 0){
      $(this).removeClass('open');
    }
  })
})