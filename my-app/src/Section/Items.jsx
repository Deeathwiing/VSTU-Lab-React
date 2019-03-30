import React from "react";
import $ from "jquery";

const Item = props => {
  function addRating() {
    $(".rating").on("click", ".ratingstar", function() {
      const itemId = Number($(this).attr("item-id"));
      console.log(itemId);
      const ratingValue = Number($(this).attr("rating-value"));
      console.log(ratingValue);
      let items = localStorage.getItem("items")
        ? JSON.parse(localStorage.getItem("items"))
        : [];
      let user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : [];

      items = items.map(item => {
        if (item.id === itemId) {
          console.log(item.rating);
          if ((item.rating.user = user.logEmail)) {
            const personalRating = {
              user: user.logEmail,
              ratingValue: ratingValue
            };
            item.rating = personalRating;
          }
        }
        return item;
      });
      localStorage.setItem("items", JSON.stringify(items));
      return;
    });
    return;
  }
  $(document).ready(() => {
    addRating();
  });

  let item = props.state.map(item => {
    return (
      <div key={item.id} className={"card dataId" + item.id}>
        <img src={item.picture} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          <p className="card-text">{item.tags}</p>
        </div>
        <div className="rating">
          <span className="ratingstar item" item-id={item.id} rating-value={5}>
            ☆
          </span>
          <span className="ratingstar item" item-id={item.id} rating-value={4}>
            ☆
          </span>
          <span className="ratingstar item" item-id={item.id} rating-value={3}>
            ☆
          </span>
          <span className="ratingstar item" item-id={item.id} rating-value={2}>
            ☆
          </span>
          <span className="ratingstar item" item-id={item.id} rating-value={1}>
            ☆
          </span>
        </div>
      </div>
    );
  });
  return item;
};

const items = props => {
  return (
    <div className="card-columns">
      <Item state={props.state} />
    </div>
  );
};

export default items;
