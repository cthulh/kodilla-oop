'use strict';

(function(){
  function Slide(id, image, description, title, coords){
    this.id = id;
    this.image = image;
    this.description = description;
    this.title = title;
    this.coords = coords;
  }

  var slideMethods = {
    whatId: function(){
      return "The slide id is " + this.id + ".";
    },
    imageAddress: function(){
      return "Slide image address: " + this.image;
    },
    whatTitle: function(){
      return "Slide title is: " + this.title;
    },
    whatCoords: function(){
      return "Coordinates of the location are: Latitude " + this.coords.lat + ", Longitude " + this.coords.lng;
    }
  }

  Slide.prototype = slideMethods;

  params.data.forEach(function(element, index){
    params.objects[index] = new Slide(element.id, element.image, element.description, element.title, element.coords);
  });


}());
