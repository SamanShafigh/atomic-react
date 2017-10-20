import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Panel from '../../share/molecules/Panel';
import News from '../../share/organisms/News';

const NewsWidget = ({ news }) => (
  <div className="news-items">
    <Panel title="News" icon="ic_question_answer">
      {news.loaded?
        news.data.map((story, index) => <News key={index} news={story} />)
        :
        null
      }
    </Panel>
  </div>
);

NewsWidget.propTypes = {
  news: PropTypes.any,
}

export default NewsWidget;
