import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import Fade from 'react-reveal';
import { Container } from 'react-bootstrap';
import Header from './Header';
import FallbackSpinner from './FallbackSpinner';

const data = {
  intro: 'I love to learn new things and experiment with new technologies.\nThese are some of the major languages, technologies, tools and platforms I have worked with about 3 years:',
  skills: [{

    title: 'Languages & Databases',
    items: [
      {
        icon: 'images/skills/js.png',
        title: 'JavaScript',
      },
      {
        icon: 'images/skills/postgre.png',
        title: 'PostgreSQL',
      },
      {
        icon: 'images/skills/mysql.png',
        title: 'MySQL',
      },
      {
        icon: 'images/skills/mongo.png',
        title: 'MongoDB',
      },
      {
        icon: 'images/skills/redis.png',
        title: 'Redis',
      },
    ],
  },
  {
    title: 'Frameworks & Technologies',
    items: [
      {
        icon: 'images/skills/native.png',
        title: 'ReactNative',
      },
      {
        icon: 'images/skills/react.png',
        title: 'React',
      },
      {
        icon: 'images/skills/nodejs.png',
        title: 'Nodejs',
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      {
        icon: 'images/skills/android-studio.png',
        title: 'Android Studio',
      },
      {
        icon: 'images/skills/git.png',
        title: 'Git',
      },
      {
        icon: 'images/skills/docker.png',
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
