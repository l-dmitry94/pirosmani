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