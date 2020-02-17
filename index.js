function initMap() {
    let center = {lat: 53.763757, lng: -2.695436};
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: center
    });
    let marker = new google.maps.Marker({
      position: center,
      map: map
    });
  }


let locations = [
    ['Los Angeles', 34.052235, -118.243683],
    ['Santa Monica', 34.024212, -118.496475],
    ['Redondo Beach', 33.849182, -118.388405],
    ['Newport Beach', 33.628342, -117.927933],
    ['Long Beach', 33.770050, -118.193739]
  ];

let infowindow =  new google.maps.InfoWindow({});

let marker, count;

for (count = 0; count < locations.length; count++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[count][1], locations[count][2]),
      map: map,
      title: locations[count][0]
    });
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  } 