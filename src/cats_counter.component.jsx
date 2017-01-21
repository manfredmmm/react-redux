import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CatsCounterComponent = ({ count }) => (
  <span>Number of cat votes: { count }</span>
);

CatsCounterComponent.propTypes = {
  count: PropTypes.number.isRequired
};

export default connect(
  ({ list }) => ({ count: list.reduce((acc, cat) => acc + cat.votes, 0) })
)(CatsCounterComponent);
