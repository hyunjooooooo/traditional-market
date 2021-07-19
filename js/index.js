window.addEventListener('DOMContentLoaded',function(){

  $(".main_banner").slick({
    arrows:false, //화살표 사라짐 
    dots: true, //인디게이터 
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    fade:true,
    cssEase:'linear',
    autoplaySpeed:2000 //자동 넘김
  });
});
