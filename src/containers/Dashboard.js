import React from 'react';
import { connect } from 'react-redux';

import Grid from '../share/atoms/Grid';
import Cell from '../share/atoms/Cell';
import Header from '../components/Dashboard/Header';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Grid justify="center">
          <Cell/>
          <Cell size="30">
            <Header user={this.props.profile}/>
          </Cell>
          <Cell/>
        </Grid>
        <Grid>
          <Cell size="5" />
          <Cell>
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Cell>
          <Cell size="5" />
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