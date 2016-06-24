$(document).ready(function(){
   
   // $footer = $('#footer');
   // $nav = $('#nav');





   // $nav.load('/include/nav.html');
   // $footer.load('/include/footer.html');



    
           // get current URL path and assign 'active' class
           var pathname = window.location.pathname;
           // if the location is NOT at index.html at the root level, apply thge active class to the navbar
           if(pathname != "/"){
             $('nav ul > li > a[href^="'+pathname+'"]').parent().addClass('active');
           } else{
             pathname ="";
           }


// back-to-top .JS


    //append the HTML to html page
     var backToTopHtml = '<a id="back-to-top" href="#" class="btn btn-primary btn-lg back-to-top" role="button" title="zurück nach oben" data-toggle="tooltip" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>';
     $('body').append(backToTopHtml);


    // css styling
     $('.back-to-top').css({
       'cursor' : 'pointer',
       'position' : 'fixed',
       'bottom' : '40px',
       'right' : '20px',
       'background-color' : '#FF9600',
       'border' :'#FF9600',
       'display' : 'none'
     }).hover(function(){
                $(this).css('background-color', '#FFCC00');

              }, function(){
                $(this).css('background-color', '#FF9600');
              }
        );

  

     

    // adding scrolling funciton 
     $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');









//changing the html of every telephone button for the entire website
  var telephone = "08031-2214040";
  var space = '&nbsp;&nbsp;&nbsp;';
  var glyphiconHtml = '<span class="glyphicon glyphicon-earphone"></span>';

  var buttonHtmlStr = glyphiconHtml + space + telephone;
  $('.btn.btn-default.shake-constant').html(buttonHtmlStr);
















// insert testimonial autohor images array into testimonial section to entire website
      var authorImages = [

          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-facebook.png',
           'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-facebook.png'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-03.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-03'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-04.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-04'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-05.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-05'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-06.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-06'
          },
          {'url':'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-07.png',
          'alt':'passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-07'
          }
      ];


      var cardsAry = $('.testmonial .card');
      for(var i = 0 ; i < cardsAry.length; i ++){
          $(cardsAry[i]).prepend('<img class ="author-image" src="' + authorImages[i].url + '"' + 'alt="'+  authorImages[i].alt + '"'+'/>');
      };















});
// $(document).ready(function(){

// controlling the scroll function only 
    $(window).scroll(function() {
         if ($(this).scrollTop() > 150){  
            $('section.nav_bar_very_top').addClass("sticky");

            //$('nav').find('a').addClass("text-color");
            
          } else{
            $('section.nav_bar_very_top').removeClass("sticky");
            //$('nav').find('a').removeClass("text-color");

            
          }

         
    });







  // moduler JS
 (function(){
     var googleMapObj ={
      init:function(){
        this.cacheDOM();
        this.render();
      },
      cacheDOM: function(){
        this.$googleMap = $('.google-map');
        this.$windowScreenWidth = $(window).width();
        this.$navTabs = $('.nav.nav-tabs').find('p');
        this.$telephoneNumberVeryTop = $('section.nav_bar_very_top').find('.telephone_number');
        // this.$breakLine = $('#break-line');
      },
      deleteClass:function(){
        this.$googleMap.removeClass('container-fluid');
      },
      addClass:function(){
        this.$googleMap.addClass('container-fluid');
      },
      deleteElement:function(){
        this.$telephoneNumberVeryTop.remove();
      },

      // deleteElement:function(){
      //   this.$breakLine.remove();
      // },
      emptyHtmlContent:function(){
        var emptyStr = "";
        this.$navTabs.text(emptyStr);
      },
      controlScreenWithJs:function(){
          if(this.$windowScreenWidth > 768){
            this.deleteClass();
          } else { 
            this.addClass();
            this.emptyHtmlContent();
            this.deleteElement();
            // this.deleteElement();
          };
      },
      render:function(){
        this.controlScreenWithJs();
      }
    };
    googleMapObj.init();
      
   })();








 // init googleMap
   function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 47.8517136, lng: 12.1267768}
      });



      // set the batchfield icon as google map pin
      var image = 'http://passfotorosenheim.de/images/passfotorosenheim_map_pin.png';

      //var beachMarker = new google.maps.Marker({
      var marker = new google.maps.Marker({
        position: {lat: 47.8517136, lng: 12.1267768},
        map: map,
        icon: image,
        title:'Biometrische Passbilder in 5 Minuten. Garantiert!'
      });


      // disable the mouse scroll function
      map.setOptions({'scrollwheel': false});



      // changing the default map style
      /*
      var styles = [
        {
          "stylers": [
            { "hue": "#006eff" },
            { "gamma": 0.18 },
            { "saturation": 50 }
          ]
        }
      ];

      map.setOptions({styles: styles});
      */

    }

















 