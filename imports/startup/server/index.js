import { Meteor } from 'meteor/meteor'
import { LearningQuestions } from '/imports/api/learning.js';

if (Meteor.isServer) {
  Meteor.startup(() => {
    console.log('starting up')
    let questionCount = LearningQuestions.find({}).count();

    console.log('tasks', questionCount)
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
}
