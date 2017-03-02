function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {lat:32.8850182, lng:-117.2414347};
  // @32.884829,-117.241199

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 18
  });

  var marker = new google.maps.Marker({
      position: ucsd_ltlng,
      map: map,
      title: 'UCSD'
  });
}
