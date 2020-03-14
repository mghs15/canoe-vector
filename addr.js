
//別ソース（landc）
var addLandcLayers = function(){
map.on('load', function() {
  map.addSource('_addr', {
    type: 'vector',
    tiles: ["http://localhost/200116_canoev/xyz/addr/{z}/{x}/{y}.pbf"],
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


var landClassConvert = function(landClassTagname){
      var landcName = ""
      if(landClassTagname === 'sanchi'){
          landcName = "山地";
      }else if(landClassTagname === 'daichi'){
          landcName = "台地";
      }else if(landClassTagname === 'sakyu'){
          landcName = "砂丘";
      }else if(landClassTagname === 'shizenteibou'){
          landcName = "自然堤防";
      }else if(landClassTagname === 'kouhaishicchi'){
          landcName = "後背湿地";
      }else{
          landcName = "氾濫平野など";
      }
      return landcName ;
}