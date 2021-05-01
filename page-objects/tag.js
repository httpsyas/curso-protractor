const DestinationsComponent = require('./components/destinations')
const HeaderComponent = require('./components/header')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')

class Tag {
  constructor () {
    this.destinations = new DestinationsComponent()
    this.header = new HeaderComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
  }
}

module.exports = Tag
