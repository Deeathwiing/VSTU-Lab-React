/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

class AllItemsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: props.state, scrollTo: 0, itemsAmount: 0 };
  }

  componentDidMount() {
    this.props.init(0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  static getDerivedStateFromProps(props, state) {
    return { items: props.state };
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

  // eslint-disable-next-line react/sort-comp
  // lastElement = this.state.items[this.state.items.length - 1];

  render() {
    return (
      <div className="card-columns">
        {this.state.items.map(item => (
          <div key={item._id} className="card" data-id={item._id}>
            <img src={item.picture} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
              <p className="card-text">{item.tags}</p>
              <button
                type="button"
                className="btn-danger btn-block btnForDelete"
                data-id={item._id}
                onClick={this.props.deleteItems}
              >
                Delete item
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default AllItemsAdmin;

AllItemsAdmin.propTypes = {
  state: PropTypes.arrayOf(PropTypes.object),
  deleteItems: PropTypes.func,
};

AllItemsAdmin.defaultProps = {
  state: [],
  deleteItems: () => {},
};
