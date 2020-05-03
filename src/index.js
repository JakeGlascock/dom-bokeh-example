domBokeh = require('dom-bokeh');

window.onload = function() {
  console.log('window loaded');
  domBokeh.default.createDepth();
  console.log('create depth attempted');
};