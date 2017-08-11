import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader, Alert } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

import { LearningQuestions } from '../../api/learning.js';
import { UserAnswers } from '../../api/userAnswers.js';
import Question from './Question.jsx'
import QuestionContainer from './QuestionContainer.jsx'

export class Learning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (!this.props.loading) {
      return (
        <QuestionContainer
          questions={this.props.data['0']['questions']}
          title={this.props.data['0'].title}
          route={this.props.route.path}
        />
      )
    } else {
      return (
        <h3>Loading..</h3>
      )
    }
  }
}

Learning.propTypes = {
  data: PropTypes.array.isRequired
}

export default learningContainer = createContainer(() => {

  const qaHandle = Meteor.subscribe('learning')
  const loading = !qaHandle.ready();

  return {
    loading,
    data: !loading ? LearningQuestions.find({}).fetch() : [],
    questionCount: LearningQuestions.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Learning);
