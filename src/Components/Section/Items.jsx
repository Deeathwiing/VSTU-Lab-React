import React from 'react';

const Item = (props) => {
  function addRating(btn) {
    const itemId = Number(btn.target.getAttribute('item-id'));
    const ratingValue = Number(btn.target.getAttribute('rating-value'));

    props.dispatch({
      type: 'ADD-RATING',
      itemId,
      ratingValue,
    });
  }

  const item = props.state.items.map(element => (
    <div key={element.id} className={`card dataId${element.id}`}>
      <img src={element.picture} className="card-img-top" alt={element.title} />
      <div className="card-body">
        <h2 className="card-title">{element.title}</h2>
        <p className="card-text">{element.description}</p>
        <p className="card-text">{element.price}</p>
        <p className="card-text">{element.tags}</p>
      </div>
      <div className="rating">
        <span onClick={addRating} className="ratingStar item" item-id={element.id} rating-value={5}>
          ☆
        </span>
        <span onClick={addRating} className="ratingStar item" item-id={element.id} rating-value={4}>
          ☆
        </span>
        <span onClick={addRating} className="ratingStar item" item-id={element.id} rating-value={3}>
          ☆
        </span>
        <span onClick={addRating} className="ratingStar item" item-id={element.id} rating-value={2}>
          ☆
        </span>
        <span onClick={addRating} className="ratingStar item" item-id={element.id} rating-value={1}>
          ☆
        </span>
      </div>
    </div>
  ));
  return item;
};

const items = props => (
  <div className="card-columns">
    <Item state={props.state} dispatch={props.dispatch} />
  </div>
);

export default items;
