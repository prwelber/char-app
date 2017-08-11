import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const DisciplineQuestions = new Mongo.Collection('discipline');

if (Meteor.isServer) {
  Meteor.publish('discipline', function disciplinePublication() {
    // only publish tasks that are public or belong to current user
    return DisciplineQuestions.find({})
  })
}

Meteor.methods({
  'discipline.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    DisciplineQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
