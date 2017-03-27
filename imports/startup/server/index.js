import { Meteor } from 'meteor/meteor'
import { LearningQuestions } from '/imports/api/learning.js';
import { HumilityQuestions } from '/imports/api/humility.js';

if (Meteor.isServer) {
  Meteor.startup(() => {
    let questionCount = LearningQuestions.find({}).count();

    console.log('learning q count', questionCount)
    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Do you like to learn new things?',
        'What do you like to learn about?',
        'What is your learning process?'
      ]
      data['description'] = 'Love of learning description placeholder here'
      data['title'] = 'Love of Learning'
      Meteor.call('learning.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = HumilityQuestions.find({}).count();

    console.log('humility q count', questionCount)
    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'What are your thoughts on humility?',
        'What two things in my life am I most grateful for?',
        'Can you admit when you are wrong? Can you give an example?'
      ]
      data['description'] = 'Humility description placeholder here'
      data['title'] = 'Humility'
      Meteor.call('humility.insert', data)
    }
  })
}
