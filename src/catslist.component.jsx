import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';

import * as actions from './list.actions';

class CatsListComponent extends Component {
  render() {
    return (
      <ul>
        { this._renderListItems() }
      </ul>
    );
  }

  _renderListItems() {
    const { list } = this.props;
    return list.map(cat =>
      (<li key={cat.id}>
        <span>{cat.name} {cat.age}</span>
        <span> --- {cat.votes}</span>
        <button onClick={() => this._voteCat(cat)}>Vote</button>
      </li>));
  }

  _voteCat(cat) {
    const { onVoteCat } = this.props;
    onVoteCat(cat);
  }
}

CatsListComponent.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired
    })
  ).isRequired,
  onVoteCat: PropTypes.func.isRequired
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => bindActionsCreators({
  onVoteCat: actions.onVoteCat
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatsListComponent);
