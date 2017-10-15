import React from 'react';
import Grid from '../share/atoms/Grid';
import Cell from '../share/atoms/Cell';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        This is dashboard
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    );
  }
}

export default Dashboard;
