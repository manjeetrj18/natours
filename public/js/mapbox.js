/* eslint-disable */

const locations = JSON.parse(document.getElementById("map").dataset.locations);
// console.log(locations);

// L.mapquest.key = '4gRCMDTh9G8hM7cG8m9h5zvgzdzdBM1L';

window.onload = function () {
  L.mapquest.key = "4gRCMDTh9G8hM7cG8m9h5zvgzdzdBM1L";

  var map = L.mapquest.map("map", {
    center: [37.7749, -122.4194],
    layers: L.mapquest.tileLayer("map"),
    zoom: 12,
  });

  map.addControl(L.mapquest.control());
};
