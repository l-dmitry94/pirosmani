$('.owl-carousel.banner__block').owlCarousel({
    loop:true,
    nav:false,
    items: 1
})
$('.owl-carousel.category__block').owlCarousel({
    loop:true,
    margin:66,
    autoWidth: true,
    nav:true,
    items: 5,
    dots: false,
    navText: ["", "<img src='../img/arrow-slider.svg'>"]
})

$(".page-item").on("click", function(e){
    e.preventDefault();
    $(".page-item").removeClass("active");
    $(this).each(function(){
        if($(this).hasClass("exc") || $(this).hasClass("prev") || $(this).hasClass("next")){
            $(this).removeClass("active");
        }
        else{
            $(this).addClass("active");
        }
    })
})

$('.play').on("click", function(){
    $(this).hide();
    $('.yt-video').attr('src', 'https://www.youtube.com/embed/Wqyz5Rb-h7c?autoplay=1')
})

jQuery(function(){
  var j = jQuery; //Just a variable for using jQuery without conflicts
  var addInput = '#qty'; //This is the id of the input you are changing
  var n = 1; //n is equal to 1
  
  //Set default value to n (n = 1)
  j(addInput).val(n + 'шт');

  //On click add 1 to n
  j('.plus').on('click', function(){
    j(addInput).val(++n + 'шт');
  })

  j('.min').on('click', function(){
    //If n is bigger or equal to 1 subtract 1 from n
    if (n > 1) {
      j(addInput).val(--n + 'шт');
    } else {
      //Otherwise do nothing
    }
  });
});


$("#tabs").tabs();

$(".review-text button").on("click", function(e){
  e.preventDefault();
  $(this).parent(".review-text").addClass("active");
  $(this).hide();
})


$('.owl-carousel.reviews').owlCarousel({
  loop:false,
  nav:true,
  margin: 16,
  autoWidth: true,
  dots: false,
  items: 2,
  navText: ["", "<span>Ещё</span><img src='../img/reviews-arrow.svg'>"]
})


jQuery(function(){
  var j = jQuery; //Just a variable for using jQuery without conflicts
  var addInput1 = '.qty1'; //This is the id of the input you are changing
  var n = 1; //n is equal to 1
  
  //Set default value to n (n = 1)
  j(addInput1).val(n);

  //On click add 1 to n
  j('.plus').on('click', function(){
    // j(addInput1).val(++n);
    j(this).parent(".range").children(addInput1).val(++n);
  })

  j('.min').on('click', function(){
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

$(".com-add").on("click", function(e){
  e.preventDefault();
  $(this).next(".form-line").show();
  $(this).hide();
})


var sum = 0;
$(".order-price span").each(function(){
  sum += parseInt($(this).html());
})
var itog = '<b>' + sum + ' ₽</b>';
$('.sum').append(itog);
var sum2 = sum;
$('.total-right b').each(function(){
  sum2 += parseInt($(".delivery .green").html())
})
var itog2 = '<b>' + sum2 + ' ₽</b>';
$('.total-right b').replaceWith(itog2);


$(".ordering-choose button").each(function(){
  $(this).on("click", function(){
    $(".ordering-choose button").removeClass("active");
    $(this).addClass("active");
  })
})

$(".pickup").on("click", function(){
  $(".cities, .address, .payment, .com-add, .comment").hide();
  var discount = 0;
  discount = sum2 * 0.2;
  var discountItog = '<b class="green">' + discount + ' ₽</b>';
  $('.delivery .green').replaceWith(discountItog);
})
$(".ordering-choose .delivery").on("click", function(){
  $(".cities, .address, .payment, .com-add, .comment").show();
  var discount = 0;
  var discountItog = '<b class="green">' + discount + ' ₽</b>';
  $('.delivery .green').replaceWith(discountItog);
})


$(".order-item button").on("click", function(){
  $(this).parent().parent().remove();
})

