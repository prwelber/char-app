import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const UserAnswers = new Mongo.Collection('userAnswers');

if (Meteor.isServer) {
  Meteor.publish('userAnswers', function userAnswersPublication() {
    // only publish tasks that are public or belong to current user
    return UserAnswers.find({owner: this.userId}, {sort: {createdAt: -1}})
  })
}

Meteor.methods({
  'insertUserAnswers'(data) {
    console.log('insertUserAnswers', data)
    check(data, Object);
    check(data.answers, Array)

    // user should be logge din before inserting task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    UserAnswers.insert({
      answers: data.answers,
      trait: data.trait,
      owner: this.userId,
      createdAt: new Date(),
      username: Meteor.user().username
    });
  }
})
