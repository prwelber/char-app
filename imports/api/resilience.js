import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const ResilienceQuestions = new Mongo.Collection('resilience');

if (Meteor.isServer) {
  Meteor.publish('resilience', function resiliencePublication() {
    // only publish tasks that are public or belong to current user
    return ResilienceQuestions.find({})
  })
}

Meteor.methods({
  'resilience.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    ResilienceQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
