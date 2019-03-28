import React, { Component } from "react";

let items = localStorage.items ? JSON.parse(localStorage.items) : [];

let itemsAdmin = items.map(item => {
  if (item) {
    return (
      <div className={"card dataId" + item.id}>
        <img src={item.picture} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <h2 className="card-title">{item.title}</h2>
          <p className="card-text">{item.description}</p>
          <p className="card-text">{item.price}</p>
          <p className="card-text">{item.tags}</p>
        </div>
      </div>
    );
  }
});
class Items extends Component {
  render() {
    return <div className="card-columns">{itemsAdmin}</div>;
  }
}

export default Items;
