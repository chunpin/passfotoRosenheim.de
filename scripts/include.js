$(document).ready(function(){
   
   $footer = $('#footer');
   $nav = $('#nav');



   $nav.load('/include/nav.html');
   $footer.load('/include/footer.html');











});
// $(document).ready(function(){




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
      },
      deleteClass:function(){
        this.$googleMap.removeClass('container-fluid');
      },
      addClass:function(){
        this.$googleMap.addClass('container-fluid');
      },
      emptyHtmlContent:function(){
        var emptyStr = "";
        this.$navTabs.text(emptyStr);
      },
      controlScreenWithJs:function(){
          if(this.$windowScreenWidth > 650){
            this.deleteClass();
          } else { 
            this.addClass();
            this.emptyHtmlContent();
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
      var image = 'http://batchfield.de/MDL/images/batchfield_map_pin.png';

      //var beachMarker = new google.maps.Marker({
      var batchfieldMarker = new google.maps.Marker({
        position: {lat: 47.8517136, lng: 12.1267768},
        map: map,
        icon: image
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












