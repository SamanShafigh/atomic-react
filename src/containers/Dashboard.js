import React from "react";
import { connect } from "react-redux";
import { fetchNews } from "../redux/actions/news";
import Grid from "../share/atoms/Grid";
import Cell from "../share/atoms/Cell";
import Header from "../components/Dashboard/Header";
import NewsWidget from "../components/Dashboard/NewsWidget";
import Connections from "../components/Dashboard/Connections";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    return (
      <div>
        <Grid justify="center">
          <Cell size="5" />
          <Cell>
            <Header user={this.props.profile} />
          </Cell>
          <Cell size="5" />
        </Grid>
        <Grid>
          <Cell size="5"></Cell>
          <Cell>
            <Grid>
              <Cell size="8">
                <NewsWidget news={this.props.news} />
              </Cell>
              <Cell>
                {React.cloneElement({ ...this.props }.children, {
                  ...this.props
                })}
              </Cell>
              <Cell size="8">
                <Connections friends={this.props.profile.friends} />
              </Cell>
            </Grid>
          </Cell>
          <Cell size="5" />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  news: state.news
});

const mapDispatchToProps = {
  fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
