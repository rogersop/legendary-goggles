class LegendaryGoggles {
  constructor() {
    this.lenses = 2;
    this.visibility = 5;
  }

  cleanGoggles() {
    // eslint-disable-next-line no-console
    console.log('Wipe, wipe...');
    this.visibility += 1;
    this.condition = 10;
  }
}

module.exports = LegendaryGoggles;
