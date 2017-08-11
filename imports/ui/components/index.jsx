import React, { Component } from 'react';
import { Link } from 'react-router'
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components';
import AccountsUIWrapper from '../AccountsUIWrapper.jsx';

const jumboStyle = {
  padding: '20px'
}

const buttonColStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

const TitleQuestion = styled.h1`
  // color: blue !important;
`;

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: false }
  }
  renderSignIn() {
    if (this.state.signedIn) {
      return <Link to="/traits"><Button bsSize="large">ENTER</Button></Link>
    } else {
      return <AccountsUIWrapper />
    }
  }

  componentDidMount() {
    if (Meteor.user()) {
      this.setState({ signedIn: true })
    } else {
      this.setState({ signedIn: false })
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col md={8}>
            <Jumbotron style={jumboStyle}>
              <TitleQuestion classNa>What is this website?</TitleQuestion>
              <p>The Character Building Tool, inspired by an Op-Ed article in the New York Times by David Brooks, is designed to help you reflect on your own self, your character, and your values. You will be able to answer pointed questions pertaining to these 9 fundamental traits:</p>
              <ol>
                <li>Love of Learning</li>
                <li>Humility</li>
                <li>Ideological Openness</li>
                <li>Tolerance</li>
                <li>Generosity</li>
                <li>Autonomy</li>
                <li>Honesty</li>
                <li>Resilience</li>
                <li>Discipline</li>
              </ol>
              <p>The goal of this project is to provide a springboard for dinner conversation with your friends and family, or to enable you to stay focused on important and potentially life changing goals. Regardless of how you interact with this site, we hope you have fun, enjoy it, and learn a bit more about yourself.</p>
            </Jumbotron>
          </Col>
          <Col md={4} style={buttonColStyle}>
            {this.renderSignIn()}
          </Col>
        </Row>
      </Grid>
    )
  }

}
