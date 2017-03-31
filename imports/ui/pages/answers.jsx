import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';

import { UserAnswers } from '../../api/userAnswers.js';

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
      console.log('done loading', this.props.data)
      var answers = this.props.data.map((a, index) => {
        return <Row key={index}>
          <div>
            <p>{a.answers[index].question}</p>
            <p>{a.answers[index].answer}</p>
            <br />
          </div>
        </Row>
      })
      console.log('answers', answers)
      return (
        <Grid>
          <Row style={flexCenter}>
            <Col md={12} xs={12} style={flexCenter}>
              <h2 style={h2Style}>Past Answers</h2>
            </Col>
          </Row>
          {answers}
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
