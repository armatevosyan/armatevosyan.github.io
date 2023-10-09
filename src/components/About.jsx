import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';

const data = {
  about: "Hi everyone, I am an experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company's organizational needs, highlight its core competencies, and further its success.",
  imageSource: 'images/about/profile.png',
};

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
};

function About(props) {
  const { header } = props;

  const parseIntro = (text) => (
    <ReactMarkdown
      children={text}
    />
  );

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data
            ? (
              <Fade>
                <Row>
                  <Col style={styles.introTextContainer}>
                    {parseIntro(data.about)}
                  </Col>
                  <Col style={styles.introImageContainer}>
                    <img style={{ height: '100%', width: '70%' }} src="https://media.licdn.com/dms/image/D5603AQFckQ9qDGHGsg/profile-displayphoto-shrink_800_800/0/1686234434961?e=1700697600&v=beta&t=453pgF1iyNdztFDX9L-nNOt3w1RWpBagW4vpgzSJCU0" alt="profile" />
                  </Col>
                </Row>
              </Fade>
            )
            : <FallbackSpinner />}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
