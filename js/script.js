'use strict';

(function(){
  var slide = {
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

  params.data.forEach(function(element, index){
    params.objects[index] = Object.create(slide);
    params.objects[index].id = element.id;
    params.objects[index].image = element.image;
    params.objects[index].description = element.description;
    params.objects[index].title = element.title;
    params.objects[index].coords = element.coords;
    console.log("Object " + params.objects[index] + " was created.");
    console.log("Prototype: " + params.objects[index].__proto__);
  });


}());
