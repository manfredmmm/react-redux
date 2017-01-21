import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './title.actions';

const HeaderComponent = ({ title, number, changeTitle }) => (
  <header>
    <h2>{ title }</h2>
    <button onClick={() => changeTitle()}>Change</button>
    <span>{ number } times</span>
  </header>
);

HeaderComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  number: React.PropTypes.number.isRequired,
  changeTitle: React.PropTypes.func.isRequired
};

const mapStateToProps = ({ title, number }) => ({ title, number });

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTitle: actions.changeTitle
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
