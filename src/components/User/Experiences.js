import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../share/molecules/Panel';
import Experience from '../../share/organisms/Experience';

const Experiences = ({ experiences }) => (
  <Panel title="Experiences">
    {experiences.map((experience) => (
      <Experience experience={experience} key={experience.id} />
    ))}
  </Panel>
);

Experiences.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
      date: PropTypes.string,
    }))
}

export default Experiences;
