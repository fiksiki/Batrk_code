jQuery(document).ready(function ($) {
    $(document).ready(function(){
        $("#blog-slider").owlCarousel(
            {
                items:3,
                loop:true,
                margin:20,
                autoplay: true,
                autoplayTimeout: 3000,
                smartSpeed: 1000,
                nav:true,
                navText: ['<div class="blog-carousel__arrow-left"></div>', '<div class="blog-carousel__arrow-right"></div>'],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2,
                        autoWidth: true,
                    },
                    1000:{
                        items:3,
                        autoWidth: true,
                    }
                }
            });
      });

      
      $('.slider-win').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-controll',
        arrows: false,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
        
      });
      
      $('.slider-controll').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        vertical: false,
        dots: false,
        infinite: true,
        asNavFor: '.slider-win',
        focusOnSelect: true,
        centerMode: false,
        variableWidth: true
      });
      var count_more = 0;

      $("#product-more-button").click(function(e){

            if (count_more <= $(this).parent().siblings('.product-more').length){
                $(this).parent().siblings('.product-more').eq(count_more).slideDown(500);
                

                if ($(this).parent().siblings('.product-more').eq(count_more).next('.product-more').css('display') != 'none'){
                    $(this).hide();
                }

                count_more += 1;

            }
            
            

      });

      $('#filter-mobile-button').click(function (e) { 
                if($(this).parent().siblings('.sidebar').hasClass('filter-mobile-noactive')){
                    $(this).parent().siblings('.sidebar').removeClass('filter-mobile-active');
                    $(this).parent().siblings('.sidebar').addClass('filter-mobile-active');
                }
                
        });

      $('#categories .sidebar__categories_name--parent').click(function (e) { 
        if ($(this).siblings('.sidebar__categories_name--sub').is(":hidden")){
            $(this).children('svg').addClass('arrow-svg-rotate');
            $(this).siblings('.sidebar__categories_name--sub').slideDown(500);
        }else{
            $(this).children('svg').removeClass('arrow-svg-rotate');
            $(this).siblings('.sidebar__categories_name--sub').hide(500);
        }
        
      });

      $('#filters .sidebar__categories_name--parent').click(function (e) { 
        if ($(this).siblings('.sidebar__categories_name--sub').is(":hidden")){
            $(this).children('svg.plus').hide();
            $(this).children('svg.minus').show();
            $(this).siblings('.sidebar__categories_name--sub').slideDown(500);
        }else{
            $(this).children('svg.minus').hide();
            $(this).children('svg.plus').show();
            $(this).siblings('.sidebar__categories_name--sub').hide(500);
        }
        
      });

      $('#product-character .sidebar__categories_name--parent').click(function (e) { 
        if ($(this).siblings('.sidebar__categories_name--sub').is(":hidden")){
            $(this).children('svg.plus').hide();
            $(this).children('svg.minus').show();
            $(this).siblings('.sidebar__categories_name--sub').slideDown(500);
        }else{
            $(this).children('svg.minus').hide();
            $(this).children('svg.plus').show();
            $(this).siblings('.sidebar__categories_name--sub').hide(500);
        }
        
      });

      $('.parent-menu').hover(function(){},function(){});

      $('#sub-menu-list > a').on('click', function (e) { 

        e.preventDefault();

        if ($(this).siblings('.sub-menu-list').is(":hidden")){
            $(this).children('svg').addClass('arrow-svg-rotate');
            $(this).siblings('.sub-menu-list').slideDown("slow");
        }else{
            $(this).children('svg').removeClass('arrow-svg-rotate');
            $(this).siblings('.sub-menu-list').hide(500);
        }
        
      });

      $('#sub-mega-menu > a').on('click', function (e) { 

        e.preventDefault();

        if ($(this).siblings('.sub-mega-menu').is(":hidden")){
            $(this).children('svg').addClass('arrow-svg-rotate');
            $(this).siblings('.sub-mega-menu').slideDown("slow");
        }else{
            $(this).children('svg').removeClass('arrow-svg-rotate');
            $(this).siblings('.sub-mega-menu').hide(500);
        }
        
      });

      $(function(){
        $('body').removeClass('nojQuery');
      });

});