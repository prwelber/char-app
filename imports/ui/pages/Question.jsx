import React, { Component } from 'react'
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap'

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

Question.propTypes = {
  onChange: React.PropTypes.func,
  onBlur: React.PropTypes.func,
  value: React.PropTypes.string
};

export default Question
