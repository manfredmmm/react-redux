import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './list.actions';
import styles from './cats_list.css';

class CatsListComponent extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }
  render() {
    return (
      <ul className={styles.list}>
        { this._renderListItems() }
      </ul>
    );
  }

  _renderListItems() {
    const { list } = this.props;
    return list.map(cat =>
      (<li key={cat.id} className={styles.listItem}>
        <span>Name: {cat.name},  Age: {cat.age}</span>
        <span> --- Votes: {cat.votes}</span>
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
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      votes: PropTypes.number.isRequired
    })
  ).isRequired,
  onVoteCat: PropTypes.func.isRequired,
  fetchCats: PropTypes.func.isRequired
};

const mapStateToProps = ({ list }) => ({ list });

const mapDispatchToProps = dispatch => bindActionCreators({
  onVoteCat: actions.onVoteCat,
  fetchCats: actions.fetchCats
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CatsListComponent);
