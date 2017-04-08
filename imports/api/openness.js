import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const OpennessQuestions = new Mongo.Collection('openness');

if (Meteor.isServer) {
  Meteor.publish('openness', function opennessPublication() {
    // only publish tasks that are public or belong to current user
    return OpennessQuestions.find({})
  })
}

Meteor.methods({
  'openness.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    OpennessQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
