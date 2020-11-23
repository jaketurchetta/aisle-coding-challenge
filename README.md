# aisle-coding-challenge
Coding challenge for Software Engineer position at Aisle.

## Overview + Problem Statement

Here at Aisle, we deal with SMS technology to communicate with consumers. With SMS tech comes very specific restrictions and regulations. One of the restrictions we have to deal with is the number of people we can text from one specific phone number at a time. Since we don’t use SMS short codes (phone numbers like 111111) and have to rely on long-code phone numbers (like 867-5309) SMS providers put limitations on how many people receive messages from one number. This is to help prevent spam, so it’s a great limitation for the industry as a whole but adds complexity to our systems.

Let’s say you’re given the following list of phone numbers that our system uses to text customers/recipients/users from:
```
[
 {
   "id": "461589ac-460d-4ef6-a47e-c206e9d150c5",
   "phone_number": "+15558675309"
 },
 {
   "id": "707ca73c-1397-4e7c-9a4d-34200ca24ae5",
   "phone_number": "+15558675310"
 },
 {
   "id": "98728336-922d-4bd4-b19a-3d5d4705de23",
   "phone_number": "+15558675311"
 },
 {
   "id": "f3b675aa-d63c-4aa0-9ed1-5c0405dcc760",
   "phone_number": "+15558675312"
 },
 {
   "id": "ddf9fbd3-a67c-40cc-a52a-52ba19d5afc7",
   "phone_number": "+15558675313"
 }
]
```

Each phone number has a max limit of 1,000 recipients per phone number before SMS providers start to filter messages out from that number due to spam protection. We would ideally like to never hit that 1,000 recipients per phone number limit to be safe.

When a new recipient is onboarded, they are assigned one of our phone numbers at random. How would you go about making sure users get a random number assignment while also abiding by the 1,000 recipient limit?

Note: you do not need to worry or think about what happens if all numbers reach the limit in this problem.

## Grading Criteria & Requirements

### Grading Criteria

We are critiquing/grading your code on the following criteria:
Code quality/legibility – Can another developer jump into this code without knowing much about it and figure it out?
Efficiency of your solution – The faster your solution is without sacrificing code quality, the better
Solution accuracy – How accurate is your solution based on the problem at hand? Does it 100% solve the issue or only part of it?

### Requirements

For submitting your solution to the Aisle team, you may do the following:

Send an email with your source code zipped up/a link to download your source code (like from Google Drive or Dropbox)
Send a link to a repository of your source code (like GitHub, Gitlab, or similar) – just make sure this is publicly accessible so our team can clone the repository to inspect your solution

You may use whatever programming language/framework you’re most familiar and comfortable with. Imagine you’re coding this solution out on a team that’s familiar with what you choose to work with. Your team may have to interact/modify this code in the future.

## Installation Instructions

Download dependencies:
```
npm install
```

Run Mocha tests:
```
npm test
```

## Discussion

In this take-home coding challenge, I chose to solve the phone number problem using Node.js. I created a function, assignContact, that will randomly assign customers to an Aisle phone number without breaching the 1,000 threshold where SMS providers filter out messages. Additionally, I implemented Mocha unit testing to evaluate the efficacy of this function.
