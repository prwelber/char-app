import React, { PropTypes } from 'react';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col, Button, PageHeader } from 'react-bootstrap'
import { createContainer } from 'meteor/react-meteor-data';
import _ from 'lodash'

import { UserAnswers } from '../../api/userAnswers.js';

const flexCenter = { display: 'flex', /*justifyContent: 'center'*/ }
const h2Style = { marginBottom: '10px' }
const pStyle = { marginBottom: '40px' }
const textCenter = { textAlign: 'center' }
const fw500 = { fontWeight: 500}
const columnCenter = { display: 'flex', /*justifyContent: 'center',*/ flexDirection: 'column', /*alignItems: 'center'*/ }



export class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleBlur = this.handleBlur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.handleTraitSelection = this.handleTraitSelection.bind(this)
  }

  handleBlur(data) {
    if (data.answer) {
      let updated = this.state.answers.concat([data])
      this.setState({answers: updated})
    }
  }

  handleTraitSelection(event) {
    this.setState({value: this.inputEl.value})
  }

  handleSubmit() {
    console.log('handle submit', this.state)
  }
  render() {
    if (!this.props.loading) {

      var renderAnswers = [];
      let filtered = this.props.data;
      if (this.state.value) {
        filtered = this.props.data.filter(d => d.trait === this.state.value)
      }
      filtered.forEach((answer) => {
        var heading = <div key={_.uniqueId()} style={flexCenter, columnCenter}>
            <h3>{answer.trait}</h3>
            <p>Answered On: {answer.createdAt.toDateString()}</p>
          </div>
        renderAnswers.push(heading)
        answers = answer.answers.map((a, i) => {
          return <Row style={flexCenter} key={_.uniqueId()}>
            <Col md={12} xs={12}>
              <div>
              <p style={fw500}>{a.question}</p>
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
          <Row>
            <Col md={3}>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>View Answers by Trait</ControlLabel>
                <FormControl
                componentClass="select"
                inputRef={ el => this.inputEl=el }
                onChange={this.handleTraitSelection.bind(this)}
                value={this.state.value}>
                  <option value="">All</option>
                  <option value="Love of Learning">Love of Learning</option>
                  <option value="Humility">Humility</option>
                  <option value="Openness">Ideological Openness</option>
                  <option value="Tolerance">Tolerance</option>
                </FormControl>
              </FormGroup>
            </Col>
          </Row>
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
  const answersHandle = Meteor.subscribe('userAnswers')
  const loading = !answersHandle.ready();

  return {
    loading,
    data: !loading ? UserAnswers.find({}).fetch() : [],
    questionCount: UserAnswers.find({}).count(),
    currentUser: Meteor.user(),
  };
}, Answers);
