let nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
  };
   
let geoCoder = nodeGeocoder(options);



async function getGeocode(data){
    return await geoCoder.geocode(data);
}





module.exports = {
    getGeocode : getGeocode
}