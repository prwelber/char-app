import React from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';

import { LearningQuestions } from '../../api/learning.js';


const flexCenter = {
  display: 'flex',
  justifyContent: 'center'
}

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Question #1</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Your Answer"
            onChange={this.handleChange}
            ref="questionOne"/>
        </FormGroup>
      </form>
    )
  }
}


export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
  render() {
    console.log(this.props)
    return (
      <Grid>
        <Row style={flexCenter}>
          <Col md={8} xs={12}>
            <Question />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('learning')

  return {
    questions: Learning.find({}).fetch(),
    questionCount: Learning.find({}).count(),
    currentUser: Meteor.user(),
  };
}, QuestionAnswer);
