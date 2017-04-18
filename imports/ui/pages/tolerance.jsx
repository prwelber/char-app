import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader, Alert } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

import { ToleranceQuestions } from '../../api/tolerance.js';
import { UserAnswers } from '../../api/userAnswers.js';
import Question from './Question.jsx'
import QuestionContainer from './QuestionContainer.jsx'

export class Tolerance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (!this.props.loading) {
      return (
        <QuestionContainer questions={this.props.data['0']['questions']} title={this.props.data['0'].title} />
      )
    } else {
      return (
        <h3>Loading..</h3>
      )
    }
  }
}

Tolerance.propTypes = {
  data: PropTypes.array.isRequired
}


export default toleranceContainer = createContainer(() => {
  // Meteor.subscribe('learning')

  const qaHandle = Meteor.subscribe('tolerance')
  const loading = !qaHandle.ready();

  return {
    loading,
    data: !loading ? ToleranceQuestions.find({}).fetch() : [],
    questionCount: ToleranceQuestions.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Tolerance);
