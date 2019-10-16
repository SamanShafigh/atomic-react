import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import { getUserNameStyle, getUserSummaryStyle } from "./style.js";

import Grid from "../../atoms/Grid";
import Cell from "../../atoms/Cell";
import ProfileImage from "../../molecules/ProfileImage";
import Icon from "../../atoms/Icon";

const ProfileInfo = ({
  name,
  location,
  connection,
  email,
  img,
  summary,
  link
}) => (
  <div>
    <Grid justify="center">
      <Cell>
        <ProfileImage url={img} size="medium" />
      </Cell>
    </Grid>
    <Grid justify="center">
      <Cell />
      <Cell justifyContent="center">
        <div className={getUserNameStyle()}>
          <Link to={link}>{name}</Link>
        </div>
      </Cell>
      <Cell />
    </Grid>
    <Grid justify="center">
      <Cell />
      <Cell justifyContent="center">
        {location}
        <Icon name="ic_supervisor_account">{connection}+</Icon>
      </Cell>
      <Cell />
    </Grid>
    <Grid justify="center">
      <Cell>
        <div className={getUserSummaryStyle()}>{summary}</div>
      </Cell>
    </Grid>
  </div>
);

ProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  connection: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ProfileInfo;
