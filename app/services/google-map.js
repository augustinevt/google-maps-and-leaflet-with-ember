import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, options) {
    var styledMapType = new this.googleMaps.StyledMapType(
         [
           {
             stylers: [
               { hue: '#cc6600' },
               { saturation: -20 }
             ]
           },{
             featureType: 'road',
             elementType: 'geometry',
             stylers: [
               { lightness: 100 },
               { visibility: 'simplified' }
             ]
           },{
             featureType: 'road',
             elementType: 'labels',
             stylers: [
               { visibility: 'off' }
             ]
           }
         ],
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
