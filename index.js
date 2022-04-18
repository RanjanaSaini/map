let autocomplete;
function initAutocomplete (){
  autocomplete =new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),{
type:
['(cities)'],
componentRestrictions:{'country':['India']},
fields:['place_id']
});
autocomplete.addListener('place_changed',onPlaceChanged);
}

 function onPlaceChanged(){
var place = autocomplete.getPlace();
if(!place.geometry){
document.getElementById('autocomplete').placeholder='enter a place';
}else{
document.getElementById('details').innerHTML = place.name;
}
}

