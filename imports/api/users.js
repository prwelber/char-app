import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Users = new Mongo.Collection('users');

if (Meteor.isServer) {
  Meteor.publish('users', function usersPublication() {
    // only publish tasks that are public or belong to current user
    return Users.find({})
  })
}

Meteor.methods({
  'users.insert'(data) {
    check(text, String);

    // user should be logge din before inserting task
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Users.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  // 'tasks.remove'(taskId) {
  //   check(taskId, String);
  //
  //   const task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can delete it
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Tasks.remove(taskId);
  // },
  // 'tasks.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);
  //
  //   const task = Tasks.findOne(taskId);
  //   if (task.private && task.owner !== Meteor.userId()) {
  //     // If the task is private, make sure only the owner can check it off
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //
  //   Tasks.update(taskId, { $set: { checked: setChecked } });
  // },
  // 'tasks.setPrivate'(taskId, setToPrivate) {
  //   check(taskId, String);
  //   check(setToPrivate, Boolean);
  //
  //   const task = Tasks.findOne(taskId);
  //
  //   // Make sure only the task owner can make a task private
  //   if (task.owner !== Meteor.userId()) {
  //     throw new Meteor.Error('not-authorized');
  //   }
  //
  //   Tasks.update(taskId, { $set: { private: setToPrivate } });
  // },
})
