import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Panel from '../../share/molecules/Panel';

const News = ({ news }) => (
  <div className="news-items">
    <Panel title="News" icon="ic_question_answer">
      {news? news.map((story, index) => <div key={index}>{story}</div>) : null}
    </Panel>
  </div>
);

News.propTypes = {
  news: PropTypes.any,
}

export default News;
