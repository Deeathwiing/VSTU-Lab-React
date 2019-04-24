/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Item = (props) => {
  const check = (event) => {
    if (
      (props.state.user.admin || props.state.user.checkLogin) == undefined
        ? false
        : props.state.user.admin || props.state.user.checkLogin
    ) {
      props.addRating(event);
    }
  };

  const item = props.state.items.map(element => (
    <div key={element.id} className={`card dataId${element.id}`}>
      <img src={element.picture} className="card-img-top" alt={element.title} />
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
            onChange={check}
            className="rating-star"
            type="radio"
            name={element.id}
            value="1"
            aria-label="Ужасно"
            checked={element.averageRating === 1 && 'checked'}
          />
          <input
            item-id={element.id}
            onChange={check}
            className="rating-star"
            type="radio"
            name={element.id}
            value="2"
            aria-label="Сносно"
            checked={element.averageRating === 2 && 'checked'}
          />
          <input
            item-id={element.id}
            onChange={check}
            className="rating-star"
            type="radio"
            name={element.id}
            value="3"
            aria-label="Нормально"
            checked={element.averageRating === 3 && 'checked'}
          />
          <input
            item-id={element.id}
            onChange={check}
            className="rating-star"
            type="radio"
            name={element.id}
            value="4"
            aria-label="Хорошо"
            checked={element.averageRating === 4 && 'checked'}
          />
          <input
            item-id={element.id}
            onChange={check}
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
  return item;
};

export default Item;
