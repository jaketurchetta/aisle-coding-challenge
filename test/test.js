const faker = require('faker')
const assert = require('assert')
const { assignContact, data } = require('../src/assignContact')

describe('Tests: assignContacts', () => {

  // Edge case: onboard 4,995  numbers (maximum)
  it('should assign 999 recipients to each phone number', () => {
    let dataCopy = JSON.parse(JSON.stringify(data))
    let results
    for (let i = 0; i < 4995; i++) {
      results = assignContact(dataCopy, faker.phone.phoneNumber('+1##########'))
    }
    results.forEach(number => assert.equal(number.recipients.length, 999))
  })

  // Edge case: onboard 0  numbers (minimum)
  it('should assign 0 recipients to each phone number', () => {
    let dataCopy = JSON.parse(JSON.stringify(data))
    let results = assignContact(dataCopy)
    results.forEach(number => assert.equal(number.recipients.length, 0))
  })

  // Test case: 2,500 randomly assigned numbers (mid)
  it('should assign between 0 and 2,500 recipients to each phone number', () => {
    let dataCopy = JSON.parse(JSON.stringify(data))
    let results
    for (let i = 0; i < 2500; i++) {
      results = assignContact(dataCopy, faker.phone.phoneNumber('+1##########'))
    }
    results.forEach(number => assert.equal(0 <= number.recipients.length && number.recipients.length <= 2500, true))
  })

})

