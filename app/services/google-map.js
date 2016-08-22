import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    var styledMapType = new this.googleMaps.StyledMapType(
         [{"elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#0F0919"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#E4F7F7"}]},{"elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#002FA7"}]},{"featureType":"poi.attraction","elementType":"geometry.fill","stylers":[{"color":"#E60003"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#FBFCF4"}]},{"featureType":"poi.business","elementType":"geometry.fill","stylers":[{"color":"#FFED00"}]},{"featureType":"poi.government","elementType":"geometry.fill","stylers":[{"color":"#D41C1D"}]},{"featureType":"poi.school","elementType":"geometry.fill","stylers":[{"color":"#BF0000"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"saturation":-100}]}],
         {name: 'Styled Map'});
    var map = new this.googleMaps.Map(container, options);
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    return map;
  },
  center(latitude, longitude) {
    return new this.googleMaps.LatLng(latitude, longitude);
  }
});
