class LegendaryGoggles {
  constructor() {
    this.lenses = 2;
    this.visibility = 5;
    this.dark = true;
  }

  cleanGoggles() {
    // eslint-disable-next-line no-console
    console.log('Wipe, wipe...');
    this.visibility += 1;
    this.condition = 10;
  }

  useNightVision() {
    if (this.dark) {
      this.visibility = 100;
    } else {
      this.visibility = 1;
    }
  }
}

module.exports = LegendaryGoggles;
