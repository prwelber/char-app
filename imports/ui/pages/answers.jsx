import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash'

import { UserAnswers } from '../../api/userAnswers.js';

const flexCenter = { display: 'flex', justifyContent: 'center' }
const h2Style = { marginBottom: '10px' }
const pStyle = { marginBottom: '40px' }
const textCenter = { textAlign: 'center' }
const columnCenter = { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }



export class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

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
      var renderAnswers = [];
      this.props.data.forEach((answer) => {
        var heading = <div key={_.uniqueId()} style={flexCenter, columnCenter}>
            <h3>{answer.trait}</h3>
            <p>Answered On: {answer.createdAt.toDateString()}</p>
          </div>
        renderAnswers.push(heading)
        answers = answer.answers.map((a, i) => {
          return <Row style={flexCenter, textCenter} key={_.uniqueId()}>
            <Col md={12} xs={12}>
              <div>
              <p>{a.question}</p>
              <p>{a.answer}</p>
              <br />
              </div>
            </Col>
          </Row>
        })
        renderAnswers.push(answers)
      })
      flatAnswers = _.flattenDeep(renderAnswers)
      return (
        <Grid>
          <Row style={flexCenter}>
            <Col md={12} xs={12} style={flexCenter}>
              <h2 style={h2Style}>Past Answers</h2>
            </Col>
          </Row>
          {flatAnswers}
          <Row style={flexCenter}>
            <Col md={8} xs={12}>
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

Answers.propTypes = {
  data: PropTypes.array.isRequired
}

//
export default answersContainer = createContainer(() => {
  // Meteor.subscribe('learning')

  const answersHandle = Meteor.subscribe('userAnswers')
  const loading = !answersHandle.ready();

  return {
    loading,
    data: !loading ? UserAnswers.find({}).fetch() : [],
    questionCount: UserAnswers.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Answers);
