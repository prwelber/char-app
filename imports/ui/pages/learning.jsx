import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader, Alert } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router'

import { LearningQuestions } from '../../api/learning.js';
import { UserAnswers } from '../../api/userAnswers.js'

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


export class Learning extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      alertVisible: false,
      disabledButton: false
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderAlert = this.renderAlert.bind(this)
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
    this.disabledButton = this.disabledButton.bind(this)
  }

  handleBlur(data) {
    if (data.answer) {
      let updated = this.state.answers.concat([data])
      this.setState({answers: updated})
    }
  }

  handleAlertDismiss() {
    this.setState({alertVisible: false})
  }

  renderAlert() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
          <h4>Your answers have been submitted succesfully.</h4>
          <p>To view all past answers, go <Link to='/answers'><a>here</a></Link></p>
        </Alert>
      );
    }
  }

  handleSubmit() {
    var clean = _.uniq(this.state.answers)
    const data = {
      answers: clean,
      trait: this.props.data['0'].title
    }
    Meteor.call('insertUserAnswers', data)
    this.setState({alertVisible: true, disabledButton: true})
  }

  disabledButton() {
    if (this.state.disabledButton) {
      return 'true'
    }
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
            <Col md={8}>
              {this.renderAlert()}
            </Col>
          </Row>
          <Row style={flexCenter}>
            <Button onClick={this.handleSubmit} disabled={this.state.disabledButton}>Submit Answers</Button>
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

Learning.propTypes = {
  data: PropTypes.array.isRequired
}

//
export default learningContainer = createContainer(() => {
  // Meteor.subscribe('learning')

  const qaHandle = Meteor.subscribe('learning')
  const loading = !qaHandle.ready();

  return {
    loading,
    data: !loading ? LearningQuestions.find({}).fetch() : [],
    questionCount: LearningQuestions.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Learning);
