
//別ソース（landc）
var addLandcLayers = function(){
map.on('load', function() {
  map.addSource('_addr', {
    type: 'vector',
    tiles: ["https://mghs15.github.io/canoe-vector/xyz/addr/{z}/{x}/{y}.pbf"],
    "maxzoom": 9,
    "minzoom": 9
  });
  map.addLayer({
    'id': '_addr',
    "maxzoom": 15,
    "minzoom": 9,
    'type': 'fill',
    'source': '_addr',
    'source-layer': 'address',
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'fill-color': 'rgba(0,0,0,0)',
      'fill-opacity': 0
    }
  });
});
}
