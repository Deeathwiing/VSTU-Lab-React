import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import { hightRating } from '../../../../selectors/Selectors';

class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = { maxRating: false, scrollTo: 0, itemsAmount: 0 };
  }

  componentDidMount() {
    if (this.state.items.length < 15) {
      this.props.init(0);
    } else {
      this.setState(state => ({ itemsAmount: state.items.length - 15 }));
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.maxRating) {
      return { items: props.state.items, user: props.state.user };
    }

    return { items: hightRating(state), user: props.state.user };
  }

  handleScroll = () => {
    if (
      window.innerHeight + window.scrollY
      >= document.body.offsetHeight - 100
    ) {
      if (this.state.scrollTo < document.body.offsetHeight) {
        this.setState((state, props) => ({
          scrollTo: Number(document.body.offsetHeight),
          itemsAmount: Number(state.itemsAmount + 15),
        }));

        return this.props.init(this.state.itemsAmount);
      }
    }
  };

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
        />

        <div className="card-column">
          <Item addRating={this.props.addRating} state={this.state} />
        </div>
      </>
    );
  }
}

export default Items;

Items.propTypes = {
  addRating: PropTypes.func,
  init: PropTypes.func,
  state: PropTypes.shape({
    item: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
};

Items.defaultProps = {
  state: {},
  addRating: () => {},
  init: () => {},
};
