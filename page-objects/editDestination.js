const DestinationComponent = require('./components/destination')
const FormComponent = require('./components/form')
const HeaderComponent = require('./components/header')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndN')
const { browser } = require('protractor')

class EditDestination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationComponent()
    this.form = new FormComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}/edit`)
  }
}

module.exports = EditDestination
