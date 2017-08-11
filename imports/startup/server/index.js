import { Meteor } from 'meteor/meteor'
import { LearningQuestions } from '/imports/api/learning.js';
import { HumilityQuestions } from '/imports/api/humility.js';
import { OpennessQuestions } from '/imports/api/openness.js';
import { ToleranceQuestions } from '/imports/api/tolerance.js';
import { AutonomyQuestions } from '/imports/api/autonomy.js';
import { GenerosityQuestions } from '/imports/api/generosity.js';
import { DisciplineQuestions } from '/imports/api/discipline.js';
import { HonestyQuestions } from '/imports/api/honesty.js';
import { ResilienceQuestions } from '/imports/api/resilience.js';


if (Meteor.isServer) {
  Meteor.startup(() => {
    let questionCount = LearningQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Name an idea or skill that I’ve added to my arsenal, or am working on adding. (e.g., starting to learn Spanish, working on my swimming stroke) What obstacles have I already overcome? What obstacles still lie before me?',
        'What was the last scientific or historical phenomenon I wondered about and then endeavored to research?',
        'What was the best book or article I read recently, and what was the main thing I learned from it? How can I apply it to my life?'
      ]
      data['description'] = 'Love of learning description placeholder here'
      data['title'] = 'Love of Learning'
      Meteor.call('learning.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = HumilityQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Name a person I know who exemplifies humility; what about this person makes them humble?',
        'What 2 things in my life am I most grateful for and why?',
        'Describe one instance in which I either admitted to someone that I was wrong or forgave someone who wronged me.'
      ]
      data['description'] = 'Humility description placeholder here'
      data['title'] = 'Humility'
      Meteor.call('humility.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = OpennessQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Name a belief/principle I’ve held to rigidly without being willing to consider other viewpoint—why am I unwilling to consider other viewpoints on this issue?',
        'How do I deal with facts pointing to another conclusion, and how might I go about collecting additional information to either refute or corroborate my existing stance?'
      ]
      data['description'] = 'Openness description placeholder here'
      data['title'] = 'Openness'
      Meteor.call('openness.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = ToleranceQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Briefly describe an instance in which I condemned (either in thought or word) a person/people with differing beliefs —what was the issue and how might I have reacted differently?',
        'Conversely, recall an instance when I sincerely endeavored to consider a viewpoint different from my own? What was the result of this interaction?'
      ]
      data['description'] = 'Tolerance description placeholder here'
      data['title'] = 'Tolerance'
      Meteor.call('tolerance.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = GenerosityQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Name a recent instance/interaction in which I gave of myself knowing that I wouldn’t get anything back.',
        'Who in my life serves this role for me?'
      ]
      data['description'] = 'Tolerance description placeholder here'
      data['title'] = 'Generosity'
      Meteor.call('generosity.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = AutonomyQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'In what arena do I tend to be a “people pleaser” and why do I feel the need to conform to others’ expectations in this area?',
        'Name one current role model, and an attribute I particularly admire about this person.',
        'What is an area in which my views deviate from his/hers?'
      ]
      data['description'] = 'Autonomy description placeholder here'
      data['title'] = 'Autonomy'
      Meteor.call('autonomy.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = DisciplineQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'In what one area am I already disciplined?',
        'Do I have any habits that I could stand to “unlearn” and replace with new, more productive ones? What are they?'
      ]
      data['description'] = 'Discipline description placeholder here'
      data['title'] = 'Discipline'
      Meteor.call('discipline.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = HonestyQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'Recall a situation in which I DIDN’T play it straight.; how did I feel immediately afterwards? How did I feel after some time had elapsed?',
        'Now recall an instance in which I DID play it straight when that wasn’t necessarily easy. How did I feel immediately afterwards? How did I feel after some time had elapsed?'
      ]
      data['description'] = 'Honesty description placeholder here'
      data['title'] = 'Honesty'
      Meteor.call('honesty.insert', data)
    }
  })
  Meteor.startup(() => {
    let questionCount = ResilienceQuestions.find({}).count();

    if (questionCount < 1) {
      let data = {};
      data['questions'] = [
        'What recent setback have I faced, and how am I working on bouncing back?',
        'Is there any long-standing hurt or adversity that I’m struggling to overcome? What about it makes it hard to move past?',
        'Looking back, is there an instance where I bounced back with resilience and am proud of myself for? Is there an instance where I struggled and lacked resilience? What enabled me to bounce back? What factors held me back?'
      ]
      data['description'] = 'Resilience description placeholder here'
      data['title'] = 'Resilience'
      Meteor.call('resilience.insert', data)
    }
  })


}
