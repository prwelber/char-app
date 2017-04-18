import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ToleranceQuestions = new Mongo.Collection('tolerance');

if (Meteor.isServer) {
  Meteor.publish('tolerance', function tolerancePublication() {
    // only publish tasks that are public or belong to current user
    return ToleranceQuestions.find({})
  })
}

Meteor.methods({
  'tolerance.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    ToleranceQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
