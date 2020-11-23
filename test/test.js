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

  // Test case: 6,000 randomly assigned numbers (beyond)
  it('should throw an error after assigning each number 999 recipients', () => {
    let dataCopy = JSON.parse(JSON.stringify(data))
    let results, map = {
      "461589ac-460d-4ef6-a47e-c206e9d150c5": 0,
      "707ca73c-1397-4e7c-9a4d-34200ca24ae5": 0,
      "98728336-922d-4bd4-b19a-3d5d4705de23": 0,
      "f3b675aa-d63c-4aa0-9ed1-5c0405dcc760": 0,
      "ddf9fbd3-a67c-40cc-a52a-52ba19d5afc7": 0
    }
    const isErrorThrown = () => {
      for (let i = 0; i < 6000; i++) {
        results = assignContact(dataCopy, faker.phone.phoneNumber('+1##########'))
        results.forEach(number => map[number.id] = number.recipients.length)
      }
    }
    // Ensure error is thrown
    assert.throws(isErrorThrown, Error, "All available numbers have reached their maximum recipient capacity!")
    // Validate that each number has reached its capacity (999)
    Object.values(map).forEach(count => assert.equal(count, 999))
  })

})

