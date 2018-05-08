
function toggleNavMenu(){
  $('.header').toggleClass('menu-expanded');
  $('.top-menu').toggleClass('collapse');
}

$(window).on('load',function(){
    $('.toggle-nav').click(toggleNavMenu)
});


  $('.why').click(function(){
    $('.hidden-panel-why').slideToggle();
  });
$('.hidden-panel-why').click(function(){
    $('.hidden-panel-why').slideUp();
});
  
function Get(url){
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


function initMap() {
    
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2
    });
    
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    var marker = new google.maps.Marker({
      position: french,
      map: map
    });

      })
}