$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></img></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                  
                }
              }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal

  $('[data-modal="consultation"]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button_mini').on('click', function() {
    $('.overlay, #order').fadeIn('slow');
  });


  function valideForm(form){
    $(form).validate ({
      rules: {
        name: "require",
        phone: "require",
        email: {
          require: true,
          email: true
        }
      },
      messages: {
        name: "Уходите, мне не интересно ваше имя",
        phone: "Как же мне поебать на твои цифры",
        email: {
          required: "Уебывай",
          email: "Ну что, даунич name@domain.com"
        }
      }
    });
    
  }
  valideForm('#consultation-form');
  valideForm('#consultation form');
  valideForm('#order form');

  $('input[name=phone]').mask("+38 (999) 999-9999");



  });


  