import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { hightRating } from '../../../../selectors/Selectors';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxRating: false };
  }

  /* shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.state.items !== nextState.items) {
      return true;
    }
    return false;
  }
*/
  static getDerivedStateFromProps(props, state) {
    if (!state.maxRating) {
      return { items: props.state.items, user: props.state.user };
    }

    return { items: hightRating(state), user: props.state.user };
  }

  maxRating = () => {
    this.state.maxRating
      ? this.setState({
        maxRating: false,
      })
      : this.setState({ maxRating: true });
  };

  render() {
    return (
      <>
        <label htmlFor="ratingCheckBox">Предметы с наивысшим рейтингом</label>
        <input
          id="ratingCheckBox"
          onChange={this.maxRating}
          className=""
          type="checkbox"
          value="1"
          aria-label="Ужасно"
        />
        <div className="card-columns">
          <Item addRating={this.props.addRating} state={this.state} />
        </div>
      </>
    );
  }
}
export default Items;

Items.propTypes = {
  addRating: PropTypes.func,
  state: PropTypes.shape({
    item: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
};

Items.defaultProps = {
  state: {},
  addRating: () => {},
};
