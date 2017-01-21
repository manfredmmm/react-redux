import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './title.actions';

const HeaderComponent = ({ title, changeTitle }) => (
  <header>
    <h2>{ title }</h2>
    <button onClick={() => changeTitle()}>Change</button>
  </header>
);

HeaderComponent.propTypes = {
  title: React.PropTypes.string.isRequired,
  changeTitle: React.PropTypes.func.isRequired
};

const mapStateToProps = ({ title }) => ({ title });

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTitle: actions.changeTitle
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
