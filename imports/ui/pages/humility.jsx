import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';

import { HumilityQuestions } from '../../api/humility.js';
import QuestionContainer from './QuestionContainer.jsx'
import Question from './Question.jsx'

import _ from 'lodash'



const flexCenter = {
  display: 'flex',
  justifyContent: 'center'
}
const h2Style = {
  marginBottom: '10px'
}
const pStyle = {
  marginBottom: '40px'
}



export class Humility extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (!this.props.loading) {
      return (
        <QuestionContainer questions={this.props.data['0']['questions']} title={this.props.data['0'].title} route={this.props.route.path}/>
      )
    } else {
      return (
        <h3>Loading..</h3>
      )
    }
  }
}

Humility.propTypes = {
  data: PropTypes.array.isRequired
}

//
export default humilityContainer = createContainer(() => {
  // Meteor.subscribe('learning')

  const qaHandle = Meteor.subscribe('humility')
  const loading = !qaHandle.ready();

  return {
    loading,
    data: !loading ? HumilityQuestions.find({}).fetch() : [],
    questionCount: HumilityQuestions.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Humility);
