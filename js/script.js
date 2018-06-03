'use strict';

(function(){
  // Slide prototype
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
  // Button prototype
  var button = {
    text: "Hello!",
    create: function(){
      //var self = this;
      this.element = document.createElement('button');
    	this.element.innerText = this.text;
      this.element.className += "simpleBtn";
    	this.element.addEventListener('click', () => alert(this.text));
      document.body.appendChild(this.element);
    }
  }

  params.data.forEach(function(element, index){
    // ---------------------------------- slides
    params.objects.slides[index] = Object.create(slide);
    params.objects.slides[index].id = element.id;
    params.objects.slides[index].image = element.image;
    params.objects.slides[index].description = element.description;
    params.objects.slides[index].title = element.title;
    params.objects.slides[index].coords = element.coords;
    // ---------------------------------- buttons
    params.objects.buttons[index] = Object.create(button);
    params.objects.buttons[index].text = element.title;
  });

  params.objects.buttons.forEach(btn => btn.create());
}());
