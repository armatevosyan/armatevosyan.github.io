import React, { useState, useContext } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';

import range from './images/projects/range.png';
import rangeLanding from './images/projects/rangeLanding.png';
import wrazzle from './images/projects/wrazzle.png';
import wrazzleLanding from './images/projects/wrazzleLanding.png';

const data = {
  projects: [
    {
      image: rangeLanding,
      title: 'Range Telecom',
      bodyText: 'The famous telecommunication service of USA',
      links: [
        {
          text: 'Live',
          href: 'https://rangetelecom.com/',
        },
      ],
      tags: [
        'React',
      ],
    },
    {
      image: range,
      title: 'Range Telecom Admin',
      bodyText: 'The admin site of Range telecom, which is controlling all services.',
      links: [
        {
          text: 'Live',
          href: 'https://ring.rangetelecom.com/',
        },
      ],
      tags: [
        'NodeJs',
        'React',
        'BootStrap',
        'ExpressJs',
        'Amazon',
        'MongoDB',
        'MySQL',
      ],
    },
    {
      image: wrazzleLanding,
      title: 'Wrazzle',
      bodyText: 'Wrazzle is the famous ACP program service of USA. Also, works E-commerce.',
      links: [
        {
          text: 'Live',
          href: 'https://acp.wrazzle.com/',
        },
      ],
      tags: [
        'NodeJs',
        'NextJs',
        'Material UI',
        'ExpressJs',
        'MySQL',
      ],
    },
    {
      image: wrazzle,
      title: 'Wrazzle Admin',
      bodyText: 'Wrazzle admin, which is controlling all services, including the E-commerce.',
      links: [
        {
          text: 'Live',
          href: 'https://acp.wrazzle.com/',
        },
      ],
      tags: [
        'NodeJs',
        'React',
        'Material UI',
        'ExpressJs',
        'MySQL',
      ],
    },
  ],
};

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [showMore, setShowMore] = useState(false);

  const numberOfItems = showMore && data ? data.length : 6;
  return (
    <>
      <Header title={header} />
      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.projects?.slice(0, numberOfItems).map((project) => (
                  <Fade key={project.title}>
                    <ProjectCard project={project} />
                  </Fade>
                ))}
              </Row>

              {!showMore
                && (
                <Button
                  style={styles.showMoreStyle}
                  variant={theme.bsSecondaryVariant}
                  onClick={() => setShowMore(true)}
                >
                  show more
                </Button>
                )}
            </Container>
          </div>
        ) : <FallbackSpinner /> }
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;
