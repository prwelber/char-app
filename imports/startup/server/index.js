import { Meteor } from 'meteor/meteor'
import { LearningQuestions } from '/imports/api/learning.js';
import { HumilityQuestions } from '/imports/api/humility.js';
import { OpennessQuestions } from '/imports/api/openness.js';
import { ToleranceQuestions } from '/imports/api/tolerance.js';

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
  Meteor.startup(() => {
    let questionCount = OpennessQuestions.find({}).count();

    console.log('openness q count', questionCount)
    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'What are your thoughts on idealogical openness?',
        'Are you open to hearing new ideas and opinions?',
        'When is the last time you changed your mind about something?'
      ]
      data['description'] = 'Openness description placeholder here'
      data['title'] = 'Openness'
      Meteor.call('openness.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = ToleranceQuestions.find({}).count();

    console.log('tolerance q count', questionCount)
    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'What are your thoughts on tolerance?',
        'Are you tolerant of those different from you?'
      ]
      data['description'] = 'Tolerance description placeholder here'
      data['title'] = 'Tolerance'
      Meteor.call('tolerance.insert', data)
    }
  })


}
