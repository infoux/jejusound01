$(function(){
  mapModal()
  AOS.init();

  // swiper
  new Swiper('.swiper-container', {
    autoplay: { // 자동 재생 여부
      delay: 5000 // 5초마다 슬라이드 바뀜
    },
    loop: true, // 반복 재생 여부
    slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.swiper-prev', // 이전 버튼 선택자
      nextEl: '.swiper-next' // 다음 버튼 선택자
    }
  })


    const blankElems = $('.blank');
    const graphicElems = $('.graphic-item');
    let currentItem;

    // 스크롤 이벤트
    $(window).on("scroll",() => {
      const scr = $(window).scrollTop(); // 스크롤 값 얻기
      const scrollBottom = $(window).scrollTop() + $(window).height(); // 스크롤 바텀 값
    

        // 화면 전환 스티키1
        let blank;
        let boundingRect;
      
        for (let i = 0; i < blankElems.length; i++) {
            blank = blankElems[i];
          boundingRect = blank.getBoundingClientRect();
          if (!blank) continue;
    
          if (boundingRect.top > window.innerHeight * 0.2 && boundingRect.top < window.innerHeight * 0.8) {
            if (currentItem) {
              currentItem.classList.remove('visible');
            }
    
            currentItem = graphicElems[blank.dataset.index];
            currentItem.classList.add('visible');
          }
        }

        const line = $('.line-wrapper')
        let ofset
        if(line.length){
            ofset = line.offset().top;
        }

        if(ofset){
          if(scrollBottom>ofset){
            $('.line-bar').addClass('on')
          } else {
            $('.line-bar').removeClass('on')
          }
        }
        
    
    })

    
});



function mapModal(){
  // 제주환경자원순환센터
  $('.page03-map .map-senter01').on('click',function(){
    $('.modal01').fadeIn('300')
  })
  $('.modalClose').on('click',function(){
    $('.modal01').fadeOut('300')
  })
  // 화천매립장
  $('.page03-map .map-senter02').on('click',function(){
    $('.modal02').fadeIn('300')
  })
  $('.modalClose').on('click',function(){
    $('.modal02').fadeOut('300')
  })
  // 색달매립장
  $('.page03-map .map-senter03').on('click',function(){
    $('.modal04').fadeIn('300')
  })
  $('.modalClose').on('click',function(){
    $('.modal04').fadeOut('300')
  })
  // 남원매립장
  $('.page03-map .map-senter04').on('click',function(){
    $('.modal03').fadeIn('300')
  })
  $('.modalClose').on('click',function(){
    $('.modal03').fadeOut('300')
  })
}

