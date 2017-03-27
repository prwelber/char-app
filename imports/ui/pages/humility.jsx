import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';

import { HumilityQuestions } from '../../api/humility.js';

import Question from './Question.jsx'


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
    this.state = {
      answers: []
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBlur(data) {
    if (data.answer) {
      let updated = this.state.answers.concat([data])
      this.setState({answers: updated})
    }
  }

  handleSubmit() {
    console.log('handle submit', this.state)
  }
  render() {
    if (!this.props.loading) {
      let questions = this.props.data['0']['questions'].map((q, index) => {
        return <Question question={q} afterBlur={this.handleBlur} key={index} />
      })
      return (
        <Grid>
          <Row style={flexCenter}>
            <Col md={12} xs={12} style={flexCenter}>
              <h2 style={h2Style}>{this.props.data['0'].title}</h2>
            </Col>
          </Row>
          <Row style={flexCenter}>
            <Col md={12} xs={12} style={flexCenter}>
              <p style={pStyle}>{this.props.data['0'].description}</p>
            </Col>
          </Row>
          <Row style={flexCenter}>
            <Col md={8} xs={12}>
              {questions}
            </Col>
          </Row>
          <Row style={flexCenter}>
            <Button onClick={this.handleSubmit}>Submit Answers</Button>
          </Row>
        </Grid>
      )
    } else {
      return (
        <h3>Loading...</h3>
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
