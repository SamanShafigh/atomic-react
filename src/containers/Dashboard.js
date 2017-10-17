import React from 'react';
import { connect } from 'react-redux';

import Grid from '../share/atoms/Grid';
import Cell from '../share/atoms/Cell';
import Header from '../components/Dashboard/Header';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell size="8"></Cell>
          <Cell>
            <Header user={this.props.profile}/>
          </Cell>
          <Cell size="8"></Cell>
        </Grid>
        <Grid>
          <Cell size="8"></Cell>
          <Cell>
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Cell>
          <Cell size="8"></Cell>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);