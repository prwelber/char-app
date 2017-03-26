import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';

import { LearningQuestions } from '../../api/learning.js';


const flexCenter = {
  display: 'flex',
  justifyContent: 'center'
}
const h2Style = {
  marginBottom: '50px'
}

class Question extends React.Component {
  constructor(props) {
    super(props)
    this.state = { answer: '', question: this.props.question }

    this.handleChange = this.handleChange.bind(this)
    this.blur = this.blur.bind(this)
  }

  handleChange(e) {
    this.setState({answer: e.target.value})
  }

  blur() {
    console.log('blur', this.props)
    this.props.afterBlur(this.state)
  }

  render() {

    return (
      <form>
        <FormGroup>
          <ControlLabel>{this.props.question}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Your Answer"
            onChange={this.handleChange}
            ref="questionOne"
            onBlur={this.blur}/>
        </FormGroup>
      </form>
    )
  }
}


export class QuestionAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: []
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBlur(data) {
    let updated = this.state.answers.concat([data])
    this.setState({answers: updated})
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

Question.propTypes = {
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  value: React.PropTypes.string
};

QuestionAnswer.propTypes = {
  data: PropTypes.array.isRequired
}

//
export default qaContainer = createContainer(() => {
  // Meteor.subscribe('learning')

  const qaHandle = Meteor.subscribe('learning')
  const loading = !qaHandle.ready();

  return {
    loading,
    data: !loading ? LearningQuestions.find({}).fetch() : [],
    questionCount: LearningQuestions.find({}).count(),
    currentUser: Meteor.user(),
  };
}, QuestionAnswer);
