import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const AutonomyQuestions = new Mongo.Collection('autonomy');

if (Meteor.isServer) {
  Meteor.publish('autonomy', function autonomyPublication() {
    // only publish tasks that are public or belong to current user
    return AutonomyQuestions.find({})
  })
}

Meteor.methods({
  'autonomy.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    AutonomyQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
