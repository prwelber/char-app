import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const GenerosityQuestions = new Mongo.Collection('generosity');

if (Meteor.isServer) {
  Meteor.publish('generosity', function generosityPublication() {
    // only publish tasks that are public or belong to current user
    return GenerosityQuestions.find({})
  })
}

Meteor.methods({
  'generosity.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    GenerosityQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
