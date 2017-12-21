'use strict'

const Model = use('Model')

class Organization extends Model {
  static get dates() {
    return super.dates.concat(['fundationDate'])
  }
}

module.exports = Organization