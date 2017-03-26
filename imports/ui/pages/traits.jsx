import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row } from 'react-bootstrap'

const traitData = [
      {
        id: 1, title: 'Love of Learning', text: 'Some text here about LEARNING. quick brown fox jumps over lazy dog. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', img: 'imgUrl', link: '/t/learning'
      },
      {
        id: 2, title: 'Humility', text: 'Some text here about HUMILITY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl', link: '/t/humility'
      },
      {
        id: 3, title: 'Idealogical Openness', text: 'Some text here about OPENNESS. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl', link: '/t/openness'
      },
      {
        id: 4, title: 'Tolerance', text: 'Some text here about love of TOLERANCE. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl', link: '/t/tolerance'
      },
      {
        id: 5, title: 'Generosity', text: 'Some text here about love of GENEROSITY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit, but wait there is more!.', img: 'imgUrl', link: '/t/generosity'
      },
      {
        id: 6, title: 'Autonomy', text: 'Some text here about love of AUTONOMY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl', link: '/t/autonomy'
      },
      {
        id: 7, title: 'Honesty', text: 'Some text here about HONESTY. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit, wait hold up need more text to be shown here!!!!.', img: 'imgUrl', link: '/t/honesty'
      },
      {
        id: 8, title: 'Resilience', text: 'Some text here about RESILIENCE. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl', link: '/t/resilience'
      },
      {
        id: 9, title: 'Discipline', text: 'Some text here about DISCIPLINE. quick brown fox jumps over lazy dog Lorem ipsum dolor sit amet, consectetur adipisicing elit,.', img: 'imgUrl', link: '/t/discipline'
      }
    ]

  const traitStyle = {
    minHeight: '130px'
  }

  const Trait = (t) => {
    return <Col style={traitStyle} md={6} sm={12} xs={12}>
      <Link to={t.link}><h3>{t.title}</h3></Link>
      <p>{t.text}</p>
    </Col>
  }

  export const Traits = () => {
    let traits = traitData.map(t => {
      return <Trait link={t.link} title={t.title} text={t.text} key={t.id}></Trait>
    })
    return <div className="">
      <Grid>
        <Row>
          {traits}
        </Row>
      </Grid>
    </div>
  }

  Trait.propTypes = {
    title: React.PropTypes.string,
    text: React.PropTypes.string,
    link: React.PropTypes.string
  };
  //
  // Traits.defaultProps = {
  //   name: 'My big ol\' tasty sandwich',
  //   pickles: false,
  //   tomato: true,
  //   lettuce: true,
  //   meats: ['turkey', 'ham'],
  //   cheeses: ['swiss', 'american', 'provolone'],
  // };
