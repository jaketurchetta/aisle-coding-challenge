// Data array includes provided phone numbers (id, number, recipients)
let data = [
  {
    "id": "461589ac-460d-4ef6-a47e-c206e9d150c5",
    "phone_number": "+15558675309",
    // Added recipients array to mainain onboarded number assignments
    "recipients": []
  },
  {
    "id": "707ca73c-1397-4e7c-9a4d-34200ca24ae5",
    "phone_number": "+15558675310",
    "recipients": []
  },
  {
    "id": "98728336-922d-4bd4-b19a-3d5d4705de23",
    "phone_number": "+15558675311",
    "recipients": []
  },
  {
    "id": "f3b675aa-d63c-4aa0-9ed1-5c0405dcc760",
    "phone_number": "+15558675312",
    "recipients": []
  },
  {
    "id": "ddf9fbd3-a67c-40cc-a52a-52ba19d5afc7",
    "phone_number": "+15558675313",
    "recipients": []
  }
]

const assignContact = (data, phoneNumber) => {

  // If phoneNumber argument missing, return initial data
  if (!phoneNumber) return data

  // Filter data to numbers that still have less than 1,000 recipients
  let validNumbers = data.filter(item => item.recipients.length < 999)

  // Throw error if there are no remaining valid numbers
  if (!validNumbers.length) throw new Error("All available numbers have reached their maximum recipient capacity!")

  // Select one of the remaining numbers at random
  let index = Math.floor(Math.random() * validNumbers.length)

  // Push new onboarded number into appropriate recipients array
  validNumbers[index].recipients.push(phoneNumber)

  // Return data array
  return data

}

// Export for testing
exports.assignContact = assignContact
exports.data = data
