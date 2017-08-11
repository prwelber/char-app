import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const HonestyQuestions = new Mongo.Collection('honesty');

if (Meteor.isServer) {
  Meteor.publish('honesty', function honestyPublication() {
    // only publish tasks that are public or belong to current user
    return HonestyQuestions.find({})
  })
}

Meteor.methods({
  'honesty.insert'(data) {
    check(data, Object);
    check(data.questions, Array)

    HonestyQuestions.insert({
      questions: data.questions,
      description: data.description,
      title: data.title,
      createdAt: new Date(),
    });
  },
})
