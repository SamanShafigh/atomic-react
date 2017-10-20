import React from 'react';
import { connect } from 'react-redux';

import Grid from '../share/atoms/Grid';
import Cell from '../share/atoms/Cell';
import Panel from '../share/molecules/Panel';
import Header from '../components/Dashboard/Header';
import News from '../components/Dashboard/News';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Grid justify="center">
          <Cell size="5" />
          <Cell>
            <Header user={this.props.profile}/>
          </Cell>
          <Cell size="2" />
        </Grid>
        <Grid>
          <Cell size="5">
            <News />
          </Cell>
          <Cell>
            {React.cloneElement({...this.props}.children, {...this.props})}
          </Cell>
          <Cell size="2" />
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