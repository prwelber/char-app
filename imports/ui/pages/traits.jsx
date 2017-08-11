import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Col, Row, Image } from 'react-bootstrap';
import styled from 'styled-components';

const traitData = [
      {
        id: 1, title: 'Love of Learning', text: 'We are all born with some degree of curiosity about the world around us-this is especially evident in young children. To be sure, that same innate curiosity can be cultivated when we purposefully investigate realms beyond our "comfort zone".', img: 'imgUrl', link: '/t/learning'
      },
      {
        id: 2, title: 'Humility', text: 'True humility is to have a modest (or even low) view of one\'s own importance; manifestations of this include gratefulness for good fortune in one\'s life, being willing to step out of the limelight and let someone else step in, admitting when we\'re wrong about something, and forgiving someone who has done something wrong to us.', img: 'imgUrl', link: '/t/humility'
      },
      {
        id: 3, title: 'Idealogical Openness', text: 'While holding fast to one\'s beliefs and ideals is admirable, the line between solidity and rigidity can become blurry-a certain amount of flexibility and openness helps to mitigate against the tendency to dogmatically cling to one\'s beliefs without considering other viewpoints.', img: 'imgUrl', link: '/t/openness'
      },
      {
        id: 4, title: 'Tolerance', text: 'Even reasonable, intelligent people can disagree quite vastly. Tolerance is the ability to "agree to disagree" with respect and civility.', img: 'imgUrl', link: '/t/tolerance'
      },
      {
        id: 5, title: 'Generosity', text: 'Usually connected to finances, here generosity also refers to the giving of one\'s time and emotional energy, especially to people who will never be able to repay us.', img: 'imgUrl', link: '/t/generosity'
      },
      {
        id: 6, title: 'Autonomy', text: 'We\'re all prone to be "people pleasers" to some degree or another-to be able to act consistently with who you are and not according to others\' expectations of you is the essence of autonomy.', img: 'imgUrl', link: '/t/autonomy'
      },
      {
        id: 7, title: 'Honesty', text: 'True honesty is to "play it straight" even when the consequences don\'t promise to work out in my favor, and may even cause embarrassment, humiliation and a loss of social or professional status.', img: 'imgUrl', link: '/t/honesty'
      },
      {
        id: 8, title: 'Resilience', text: 'Resilience is the ability to recover from setbacks, adapt well to change, and keep going in the face of adversity.', img: 'imgUrl', link: '/t/resilience'
      },
      {
        id: 9, title: 'Discipline', text: 'Discipline, or self-control, is forming habits that will enable me to put the work in today so that I can enjoy success tomorrow.', img: 'imgUrl', link: '/t/discipline'
      }
    ]

  const centerText = { textAlign: 'center' }
  const traitStyle = { minHeight: '130px' }
  const imgStyle = { width: '85px', height: 'auto' }
  const h3Style = { marginTop: '0px' }
  const h2Style = { marginBottom: '50px', fontWeight: '400', color: 'rgb(111, 206, 213)' }

  const FlexRowContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 30px;
    width: 48%;
    margin-right: 2%;

    @media (max-width: 767px) {
  		width: 90%;
  	}
  `
  const ImageContainer = styled.div`
    width: 85px;
    height: auto;
    margin-right: 10px;
  `

  const TraitDescription = styled.div`

  `

  const TraitsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
  `

  const TraitTitle = styled.h3`
    line-height: 20px;
  `

  const Trait = (t) => {
    return <FlexRowContainer>
      <ImageContainer>
        <Image src={`/images/${t.title}.jpg`} style={ imgStyle } />
      </ImageContainer>
      <TraitDescription>
        <Link to={t.link}><TraitTitle style={ h3Style }>{t.title}</TraitTitle></Link>
        <p>{t.text}</p>
      </TraitDescription>
    </FlexRowContainer>
  }

  export const Traits = () => {
    let traits = traitData.map(t => {
      return <Trait link={t.link} title={t.title} text={t.text} key={t.id}></Trait>
    })
    return <div className="">
      <Grid>
        <Row>
          <Col md={12} style={centerText}>
            <h2 style={h2Style}>Select a trait to view prompts and submit answers.</h2>
          </Col>
        </Row>
        <TraitsContainer>
          {traits}
        </TraitsContainer>
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
