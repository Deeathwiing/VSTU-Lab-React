import React from 'react';

const Item = (props) => {
  const check = (event) => {
    event.preventDefault();
    if (
      (props.state.user.admin || props.state.user.checkLogin) === undefined
        ? false
        : props.state.user.admin || props.state.user.checkLogin
    ) {
      props.addRating(event);
    }
  };
  let item;
  const lastElement = props.state.items[props.state.items.length - 1];
  if (lastElement) {
    item = props.state.items.map(element => (
      <div key={element._id} className={`card dataId${element._id}`}>
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

        <fieldset className="rating" key={element._id}>
          <div className="rating-group">
            <input
              item-id={element._id}
              onChange={check}
              className="rating-star"
              type="radio"
              name={element._id}
              value="1"
              aria-label="Ужасно"
              checked={element.averageRating === 1 && 'checked'}
            />
            <input
              item-id={element._id}
              onChange={check}
              className="rating-star"
              type="radio"
              name={element._id}
              value="2"
              aria-label="Сносно"
              checked={element.averageRating === 2 && 'checked'}
            />
            <input
              item-id={element._id}
              onChange={check}
              className="rating-star"
              type="radio"
              name={element._id}
              value="3"
              aria-label="Нормально"
              checked={element.averageRating === 3 && 'checked'}
            />
            <input
              item-id={element._id}
              onChange={check}
              className="rating-star"
              type="radio"
              name={element._id}
              value="4"
              aria-label="Хорошо"
              checked={element.averageRating === 4 && 'checked'}
            />
            <input
              item-id={element._id}
              onChange={check}
              className="rating-star"
              type="radio"
              name={element._id}
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
};

export default Item;