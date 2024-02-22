var map;
function initMap() {
    var setMap = {
        center: { lat: 53.4808, lng: -2.2426},
        zoom: 12
    }

    var map = new google.maps.Map(document.getElementById('map'), setMap);
}
