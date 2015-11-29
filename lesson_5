var Car = {
  speed: 0
}

Object.defineProperties(Car, {
  setSpeed: {
    value: function(speed) {
      this.speed = speed;
      return this;
    }
  },
  getSpeed: {
    value: function() {
      this.carspeed = "Car speed is " + this.speed + " km/h";
      return this.carspeed;
    
    }
  },
  clearSpeed: {
    value: function() {
      this.speed = 0;
      return this;
    }
  },

});


Car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed();
