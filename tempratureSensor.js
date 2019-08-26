const EventEmitter = require("events");
class tempSensor extends EventEmitter {
  constructor() {
    super();
  }

  temperatureChange() {
    this.emit("tempChange");
  }
}

const t = new tempSensor();

t.on("tempChange", () => {
  console.log("temp changed nice");
});

t.temperatureChange();
