import React from 'react';
import container from '../Container';

class Home extends React.Component {
  render() {
    return (
      <div>
        This is home page

        {['A', 'B', 'C'].map((componentId) => {
          let Component = container.get(componentId);

          return <Component>{componentId}</Component>;
        })}


      </div>
    );
  }
}

export default Home;
