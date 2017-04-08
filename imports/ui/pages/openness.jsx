import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader, Alert } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

import { OpennessQuestions } from '../../api/openness.js';
import { UserAnswers } from '../../api/userAnswers.js';
import Question from './Question.jsx'
import QuestionContainer from './QuestionContainer.jsx'
//
// const flexCenter = {
//   display: 'flex',
//   justifyContent: 'center'
// }
// const h2Style = {
//   marginBottom: '50px'
// }
// const pStyle = {
//   marginBottom: '40px'
// }

export class Openness extends React.Component {
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

Openness.propTypes = {
  data: PropTypes.array.isRequired
}


export default opennessContainer = createContainer(() => {
  // Meteor.subscribe('learning')

  const qaHandle = Meteor.subscribe('openness')
  const loading = !qaHandle.ready();

  return {
    loading,
    data: !loading ? OpennessQuestions.find({}).fetch() : [],
    questionCount: OpennessQuestions.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Openness);
