import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';

import postgre from './images/skills/postgre.png';

import js from './images/skills/js.png';
import nodejs from './images/skills/nodejs.png';
import android from './images/skills/android_new.png';
import mysql from './images/skills/mysql.png';
import docker from './images/skills/docker.png';
import git from './images/skills/git.png';
import mongo from './images/skills/mongo.png';
import native from './images/skills/native.png';
import react from './images/skills/react.png';
import redis from './images/skills/redis.png';

const data = {
  intro: 'I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with about 3 years:',
  skills: [{

    title: 'Languages & Databases',
    items: [
      {
        icon: js,
        title: 'JavaScript',
      },
      {
        icon: postgre,
        title: 'PostgreSQL',
      },
      {
        icon: mysql,
        title: 'MySQL',
      },
      {
        icon: mongo,
        title: 'MongoDB',
      },
      {
        icon: redis,
        title: 'Redis',
      },
    ],
  },
  {
    title: 'Frameworks & Technologies',
    items: [
      {
        icon: native,
        title: 'ReactNative',
      },
      {
        icon: react,
        title: 'React',
      },
      {
        icon: nodejs,
        title: 'Nodejs',
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      {
        icon: android,
        title: 'Android Studio',
      },
      {
        icon: git,
        title: 'Git',
      },
      {
        icon: docker,
        title: 'Docker',
      },
    ],
  },
  ],
};

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: 'pre-wrap',
  },
};

function Skills(props) {
  const { header } = props;

  const renderSkillsIntro = (intro) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown children={intro} />
    </h4>
  );

  return (
    <>
      <Header title={header} />
      {data ? (
        <Fade>
          <div className="section-content-container">
            <Container>
              {renderSkillsIntro(data.intro)}
              {data.skills?.map((rows) => (
                <div key={rows.title}>
                  <br />
                  <h3>{rows.title}</h3>
                  {rows.items.map((item) => (
                    <div key={item.title} style={{ display: 'inline-block' }}>
                      <img
                        style={styles.iconStyle}
                        src={item.icon}
                        alt={item.title}
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </Container>
          </div>
        </Fade>
      ) : <FallbackSpinner /> }
    </>
  );
}

Skills.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Skills;
