import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader, Alert } from 'react-bootstrap'
import { Link } from 'react-router'

import Question from './Question.jsx'

const flexCenter = {
  display: 'flex',
  justifyContent: 'center'
}
const h2Style = {
  marginBottom: '50px'
}
const pStyle = {
  marginBottom: '40px'
}

class QuestionContainer extends React.Component {
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
          <p>To view all past answers, go <Link to='/answers'>here</Link></p>
        </Alert>
      );
    }
  }

  handleSubmit() {
    var clean = _.uniq(this.state.answers)
    const data = {
      answers: clean,
      trait: this.props.title
    }
    Meteor.call('insertUserAnswers', data, (err, res) => {
      if (err) {
        throw new Meteor.Error(err)
      } else {
        this.setState({alertVisible: true, disabledButton: true})
      }

    })

  }

  disabledButton() {
    if (this.state.disabledButton) {
      return 'true'
    }
  }

  render() {
    if (!this.props.loading) {
      let questions = this.props.questions.map((q, index) => {
        return <Question question={q} afterBlur={this.handleBlur} key={index} />
      })
      return (
        <Grid>
          <Row style={flexCenter}>
            <Col md={12} xs={12} style={flexCenter}>
              <h2 style={h2Style}>{this.props.title}</h2>
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

QuestionContainer.propTypes = {
  questions: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

export default QuestionContainer
