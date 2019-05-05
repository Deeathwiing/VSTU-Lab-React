import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.state.items !== nextState.items) {
      return true;
    }
    return false;
  }

  check = (event) => {
    event.preventDefault();

    if (
      (this.props.state.user.admin || this.props.state.user.checkLogin)
      === undefined
        ? false
        : this.props.state.user.admin || this.props.state.user.checkLogin
    ) {
      this.props.addRating(event, this.props.state.user);
    }
  };

  render() {
    let item;
    const lastElement = this.props.state.items[
      this.props.state.items.length - 1
    ];
    if (lastElement) {
      item = this.props.state.items.map(element => (
        <div key={element.id} className={`card dataId${element.id}`}>
          <img
            src={element.picture}
            className="card-img-top"
            alt={element.title}
          />
          <div className="card-body">
            <h2 className="card-title">{element.title}</h2>
            <p className="card-text">{element.description}</p>
            <p className="card-text">{element.price}</p>
            <p className="card-text">{element.tags}</p>
          </div>

          <fieldset className="rating" key={element.id}>
            <div className="rating-group">
              <input
                item-id={element.id}
                onChange={this.check}
                className="rating-star"
                type="radio"
                name={element.id}
                value="1"
                aria-label="Ужасно"
                checked={element.averageRating === 1 && 'checked'}
              />
              <input
                item-id={element.id}
                onChange={this.check}
                className="rating-star"
                type="radio"
                name={element.id}
                value="2"
                aria-label="Сносно"
                checked={element.averageRating === 2 && 'checked'}
              />
              <input
                item-id={element.id}
                onChange={this.check}
                className="rating-star"
                type="radio"
                name={element.id}
                value="3"
                aria-label="Нормально"
                checked={element.averageRating === 3 && 'checked'}
              />
              <input
                item-id={element.id}
                onChange={this.check}
                className="rating-star"
                type="radio"
                name={element.id}
                value="4"
                aria-label="Хорошо"
                checked={element.averageRating === 4 && 'checked'}
              />
              <input
                item-id={element.id}
                onChange={this.check}
                className="rating-star"
                type="radio"
                name={element.id}
                value="5"
                aria-label="Отлично"
                checked={element.averageRating === 5 && 'checked'}
              />
            </div>
          </fieldset>
        </div>
      ));
    } else {
      item = false;
    }
    return item;
  }
}

export default Item;

Item.propTypes = {
  addRating: PropTypes.func,
  state: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.object,
  }),
};

Item.defaultProps = {
  addRating: () => {},
  state: {},
};
